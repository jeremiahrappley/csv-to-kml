# csv-to-kml

This simple script converts a CSV file containing location data into a KML file that can be imported and displayed in Google Earth.

The CSV file should contain the following headers:
- `latitude`
- `longitude`
- `placeName`
- `arrivalDate`
- `departureDate`

If you're starting from a JSON file, you can first convert it to CSV using an online tool such as [JSON to CSV Converter](https://konklone.io/json/).

## How to use

1. Place the `input.csv` file in the same directory as the script
2. Install dependencies with `npm install`
3. Run the script with `node script.js`
4. The `output.kml` file will be created in the same directory
