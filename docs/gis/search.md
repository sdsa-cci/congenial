# Search irrig unit

### URL

```:no-line-numbers
GET {{server_url}}/gis/search/{{searchKey}}
```

### :rotating_light: Possible value for searchKey

<div class="custom-container warning">
<p>searchKey can be a well_id, land_unit_id or an irrig_unit_id</p>
</div>

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>gis_search_irrig_units</p>
</div>

### Response - 200

```json
{
  "message": "Data retrieved successfully.",
  "data": {
    "irrig_unit_id": "TP0001",
    "well_ids": ["G-032265"],
    "land_unit_ids": ["112603CC"],
    "unit_type": "1CA_1RW",
    "prod": true,
    "sfz_id": 15,
    "ez_id": 1,
    "display_id": 6,
    "acres": 54.1373,
    "geom": "POLYGON((-100.282251439078 40.945333234062,-100.272725345301 40.9454436992869,-100.272749271535 40.9466896938099,-100.274978826832 40.9477019244087,-100.279407194825 40.9481573125547,-100.280351147681 40.9482078485865,-100.280533238113 40.948517389436,-100.281957469944 40.9485613658707,-100.282073466538 40.9484159479583,-100.282147389019 40.9454728253856,-100.282251439078 40.945333234062))"
  },
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="No Data" active>

```json
{
  "message": "No data found with key TP0001ssss",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
