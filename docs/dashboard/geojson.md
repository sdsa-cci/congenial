# Get GeoJSON

### URL

```:no-line-numbers
GET {{server_url}}/geojson
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_get_geo_json</p>
</div>

### Response - 200

```json
{
  "message": "The GeoJson was retrieved successfully.",
  "data": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-100.2823, 40.9453],
              [-100.2727, 40.9454],
              [-100.2727, 40.9467],
              [-100.275, 40.9477],
              [-100.2794, 40.9482],
              [-100.2804, 40.9482],
              [-100.2805, 40.9485],
              [-100.282, 40.9486],
              [-100.2821, 40.9484],
              [-100.2821, 40.9455],
              [-100.2823, 40.9453]
            ]
          ]
        },
        "properties": {
          "irrig_unit_id": "TP0001",
          "acres": 54.1373,
          "unit_type": "1CA_1RW",
          "well_properties": [
            {
              "coord": "[-100.2716,40.9451]",
              "prop": { "pump_rate": 800, "well_id": "G-032265" }
            }
          ]
        }
      }
    ]
  },
  "code": 200,
  "message_code": 0
}
```
