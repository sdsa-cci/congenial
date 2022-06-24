# Get all wells

### URL

```:no-line-numbers
GET {{server_url}}/wells
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>geo_get_all_wells</p>
</div>

### Response - 200

```json
{
  "message": "Fetched well details successfully",
  "data": [
    {
      "wellRegistrationID": "G-032265",
      "wellIrrigUnitID": "TP0001",
      "wellDistrictPumpRate": 800,
      "districtPumpRateUpdated": "2021-06-07",
      "location": "POINT(-100.271561111 40.9451333330001)",
      "wellConnectedMeter": 1,
      "wellAuditPumpRate": 874,
      "auditPumpRateUpdated": "2019-09-16"
    },
    {
      "wellRegistrationID": "G-128406",
      "wellIrrigUnitID": "TP0002",
      "wellDistrictPumpRate": 800,
      "districtPumpRateUpdated": "2021-06-07",
      "location": "POINT(-100.301277778 40.953916667)",
      "wellConnectedMeter": 1,
      "wellAuditPumpRate": 740,
      "auditPumpRateUpdated": "2019-09-13"
    }
  ],
  "code": 200,
  "message_code": 0
}
```
