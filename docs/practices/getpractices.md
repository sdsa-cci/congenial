# Get farm practices

### URL

```:no-line-numbers
GET {{server_url}}/fields/farm-practices/{{key}}
```

### :rotating_light: Possible Key Values

<div class="custom-container warning">
<p>
crop = Fetches only the crops <br/>
tillage = Fetches only the tillages <br/>
No key value passed = Fetches both the crops as well as tillages <br/>
</p>
</div>

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_get_farm_practices</p>
</div>

### Response - 200

```json
{
  "message": "Fetched farm practices successfully.",
  "data": {
    "crops": [
      {
        "crop_name": "Corn"
      },
      {
        "crop_name": "Soybeans"
      },
      {
        "crop_name": "Alfalfa"
      }
    ],
    "tillages": [
      {
        "tillage_name": "CTill"
      },
      {
        "tillage_name": "MTill"
      },
      {
        "tillage_name": "NTill"
      },
      {
        "tillage_name": "STill"
      }
    ]
  },
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Invalid Keyword" active>

```json
{
  "message": "Keyword passed is invalid.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
