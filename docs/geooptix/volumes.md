# Get well volumes

### URL

```:no-line-numbers
GET {{server_url}}/wells/{{wellID}}/pumped-volume/daily-summary
```

### Query Params

```:no-line-numbers
?startDateISO={{startDateISO}}&endDateISO={{endDateISO}}
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>geo_get_day_wise_pumped_vol_for_well</p>
</div>

### Response - 200

```json
{
  "message": "Fetched well daywise pumped volume successfully.",
  "data": {
    "reportingIntervalDays": 387,
    "pumpedVolumeTimeSeries": [
      {
        "intervalDate": "2020-05-01",
        "pumpedVolumeGallons": 0
      },
      {
        "intervalDate": "2020-05-02",
        "pumpedVolumeGallons": 0
      }
    ]
  },
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Invalid Well ID" active>

```json
{
  "message": "Requested well was not found. Please provide a valid well id.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="No Meter Connection" active>

```json
{
  "message": "Requested Well is not connected to electric meter.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Dates" active>

```json
{
  "message": "Invalid date range. Start date cannot be greater than end date.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Well" active>

```json
{
  "message": "Invalid well id.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
