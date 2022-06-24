# Get registered fields

### URL

```:no-line-numbers
GET {{server_url}}/fields/registrations
```

### :eight_spoked_asterisk: Stored Function

<div class="custom-container warning">
<p>___uf_get_registered_fields</p>
</div>

### Response - 200

```json
{
  "message": "Get registered fields.",
  "data": [
    {
      "field_id": 7,
      "irrig_unit_id": "TP0087"
    },
    {
      "field_id": 8,
      "irrig_unit_id": "TP0088"
    },
    {
      "field_id": 9,
      "irrig_unit_id": "TP0086"
    },
    {
      "field_id": 10,
      "irrig_unit_id": "TP0085"
    }
  ],
  "code": 200,
  "message_code": 0
}
```
