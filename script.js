const fs = require('fs');
const csv = require('csvtojson');
const toKml = require('tokml');

// Read the CSV file
const csvFilePath = './input.csv';

// Convert CSV to JSON
csv()
  .fromFile(csvFilePath)
  .then((jsonArray) => {
    // Create KML content
    const kmlPlacemarks = jsonArray.map((item) => {
      const { latitude, longitude, placeName, arrivalDate, departureDate } = item;
      return `
        <Placemark>
          <name>${placeName}</name>
          <Point>
            <coordinates>${longitude},${latitude}</coordinates>
          </Point>
          <TimeSpan>
            <begin>${arrivalDate}</begin>
            <end>${departureDate}</end>
          </TimeSpan>
        </Placemark>
      `;
    });

    const kmlContent = `
      <kml xmlns="http://www.opengis.net/kml/2.2">
        <Document>
          ${kmlPlacemarks.join('\n')}
        </Document>
      </kml>
    `;

    // Save KML to a file
    fs.writeFileSync('output.kml', kmlContent);

    console.log('KML file has been created successfully.');
  })
  .catch((error) => console.error(error));
