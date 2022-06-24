# Get waterdata

### URL

```:no-line-numbers
GET {{server_url}}/users/waterdata/{{year}}
```

### Query params

```:no-line-numbers
?start_key={{start_key}}&limit={{limit}}&months={{months_array}}
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_get_user_water_data</p>
</div>

### Response - 200

```json
{
  "message": "Fetched water data successfully.",
  "data": {
    "fields": [
      {
        "field_name": "new field edited",
        "acres_utilized": "",
        "inches_acres": "",
        "crop": "",
        "tillage": "",
        "business_name": "Salvino D'Sa",
        "farm_name": "Salvino D'Sa",
        "field_id": 2754,
        "irrig_unit_id": "TP1295",
        "crop_id": null,
        "farm_practice_id": null,
        "year": null,
        "total_acres": "146.25",
        "is_shared_field": true
      }
    ],
    "acres": {},
    "gpm": [
      {
        "irrig_unit_id": "TP0079",
        "pump_rate": 953
      },
      {
        "irrig_unit_id": "TP0276",
        "pump_rate": 1023
      }
    ],
    "inches_per_acre": [
      {
        "inches": 16.746696,
        "field_id": 2775,
        "farm_practice_id": 9
      },
      {
        "inches": 13.390117,
        "field_id": 2779,
        "farm_practice_id": 2
      }
    ]
  },
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Invalid User" active>

```json
{
  "message": "Email-id is not present in the database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Key/Limit">

```json
{
  "message": "Start key or Limit is invalid.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
