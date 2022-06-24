# Get graphdata

### URL

```:no-line-numbers
GET {{server_url}}/users/graphdata
```

### Query params

```:no-line-numbers
?irrig_unit_id={{irrig_unit_id}}&farm_practice_id={{farm_practice_id}}&start_date={{start_date}}&end_date={{end_date}}
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_get_monthly_daily_inches_per_acre</p>
</div>

### Response - 200

```json
{
  "message": "Fetched graph data successfully.",
  "data": {
    "days": {
      "2022-05-20": 0,
      "2022-05-21": 0,
      "2022-05-22": 0,
      "2022-05-23": 0,
      "2022-05-24": 0,
      "2022-05-25": 0,
      "2022-05-26": 0,
      "2022-05-27": 0,
      "2022-05-28": 0,
      "2022-05-29": 0,
      "2022-05-30": 0,
      "2022-05-31": 0,
      "2022-06-01": 0,
      "2022-06-02": 0,
      "2022-06-03": 0,
      "2022-06-04": 0,
      "2022-06-05": 0,
      "2022-06-06": 0.10310762,
      "2022-06-07": 0.19755603,
      "2022-06-08": 0,
      "2022-06-09": 0,
      "2022-06-10": 0,
      "2022-06-11": 0.19701909,
      "2022-06-12": 0.1722341,
      "2022-06-13": 0.16540696,
      "2022-06-14": 0,
      "2022-06-15": 0,
      "2022-06-16": 0,
      "2022-06-17": 0,
      "2022-06-18": 0,
      "2022-06-19": 0
    },
    "months": [0, 0, 0, 0, 0.4893183, 0.83532375, 0, 0, 0, 0, 0, 0]
  },
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Invalid Dates" active>

```json
{
  "message": "Invalid date range. Start date cannot be greater than end date.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Irrig Unit ID">

```json
{
  "message": "Invalid irrig unit id.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
