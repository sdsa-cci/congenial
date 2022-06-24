# Get land unit

### URL

```:no-line-numbers
POST {{server_url}}/gis/gis-units/land-units
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>gis_add_update_land_units</p>
</div>

### Request

```json
{
  "gids": [80]
}
```

### Response - 200

```json
{
  "message": "Gis Update completed successfully.",
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Existing Land" active>

```json
{
  "message": "Land unit already exists.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid GID">

```json
{
  "message": "Gid is not valid.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Deletion Not Allowed">

```json
{
  "message": "Deletion of land unit which is already connected to irrig unit is not allowed.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Action">

```json
{
  "message": "Invalid Action.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
