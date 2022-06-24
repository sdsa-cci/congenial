# Update irrig unit

### URL

```:no-line-numbers
POST {{server_url}}/gis/irrig-units
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>gis_add_update_irrig_units</p>
</div>

### Short Request

```json
{
  "irrig_units": [
    {
      "irrig_unit_id": "TP0038",
      "well_ids": ["G-005125"],
      "land_unit_ids": ["112623BC"]
    }
  ]
}
```

### Long Request

```json
{
  "irrig_units": [
    {
      "irrig_unit_id": "TP0038",
      "well_ids": ["G-005125"],
      "land_unit_ids": ["112623BC"],
      "prod": false,
      "sfz_id": 15,
      "ez_id": 1,
      "display_id": 6
    }
  ]
}
```

### Response - 200

```json
{
  "message": "Updated irrigation unit successfully.",
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="NCORPE Error" active>

```json
{
  "message": "Cannot update irrig unit with uint_type NCORPE.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Well">

```json
{
  "message": "Requested well was not found. Please provide a valid well id.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Land">

```json
{
  "message": "Request land unit not found. Please provide a valid land unit id.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Deleted Land">

```json
{
  "message": "Land unit ids contain deleted land units.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Deleted Wells">

```json
{
  "message": "Well ids contain deleted wells.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Zero Acres">

```json
{
  "message": "Cannot set prod to true for irrig unit with 0 acres.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
