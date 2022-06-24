# Add claim

### URL

```:no-line-numbers
POST {{server_url}}/claims
```
### :eight_spoked_asterisk: Stored Procedure
<div class="custom-container tip">
<p>usp_add_claim</p>
</div>

### Request

```json
{
  "field_id": 1906,
  "field_name": "RB-CF-785255",
  "farm_name": "F-SAL-T-1111111",
  "business_name": "P & P Farms 10025",
  "well_data": [
    {
      "well_id": "G-064795",
      "active": true,
      "updated_pump_rate": 1000,
      "isElectricWell": true
    }
  ]
}
```

### Response - 200

```json
{
  "message": "Claim request inserted successfully.",
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Invalid Code" active>

```json
{
  "message": "Email-id is not present in the database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Field">

```json
{
  "message": "Field id selected is not present in database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Already Claimed">

```json
{
  "message": "The field you are trying to claim is already claimed by you.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Existing Name">

```json
{
  "message": "Field with this name already exists in database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
