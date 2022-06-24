# Get well summary

### URL

```:no-line-numbers
GET {{server_url}}/wells/{{wellID}}/summary-statistics
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>geo_get_well_summary</p>
</div>

### Response - 200

```json
{
  "message": "Fetched well summary successfully",
  "data": {
    "wellRegistrationID": "G-061965",
    "wellIrrigUnitID": "TP2179",
    "wellConnectedMeter": 1,
    "wellAuditPumpRate": 1094,
    "auditPumpRateUpdated": "2019-10-02",
    "wellDistrictPumpRate": 1100,
    "districtPumpRateUpdated": "2021-10-08",
    "location": "POINT(-101.0453 41.0981)",
    "electric": 1,
    "irrigationUnitGeometry": "MULTIPOLYGON(((-101.047377739284 41.101158586282,-101.047478398874 41.1007646788256,-101.047538330269 41.1003442086564,-101.047458259163 41.0999384557099,-101.047327157756 41.0995304293433,-101.047094790853 41.0991808235047,-101.046448469159 41.0985779229154,-101.045953413633 41.0981798317232,-101.045194605932 41.0978275567821,-101.044550731599 41.0976993548348,-101.044156304291 41.097678428915,-101.043850563661 41.097739708331,-101.04362025054 41.097858314014,-101.043214769674 41.097872005998,-101.042773453264 41.0979263777094,-101.042298694762 41.0980930492691,-101.041910030462 41.0982581925364,-101.041500796817 41.0985540221083,-101.041247304961 41.0988151672941,-101.040841726823 41.0995245196619,-101.040825263569 41.1013772808622,-101.041223554554 41.1019194458788,-101.041954231348 41.1024650267011,-101.042601896032 41.1027141904032,-101.043430310913 41.1028391297029,-101.043966129595 41.1030530339186,-101.044483875996 41.1030810793454,-101.044987305152 41.1030442152237,-101.045414624233 41.1029342283682,-101.045742386511 41.1027887749494,-101.046166524757 41.1025764442429,-101.0469262206 41.1019293925883,-101.047205674533 41.1015619271201,-101.047377739284 41.101158586282),(-101.047399737172 41.0957308724815,-101.047430690381 41.0957063294938,-101.04798933316 41.0953125142744,-101.048433900228 41.0932892232306,-101.048027462009 41.0924567094623,-101.047107198385 41.0914173912338,-101.045887124784 41.0909352238589,-101.043540897716 41.0909528833916,-101.042688083631 41.0910639825161,-101.041875131283 41.0914382882052,-101.04107405003 41.0921962593749,-101.040811055062 41.0929206999555,-101.040708249345 41.0947219740935,-101.041497957129 41.0956436919473,-101.042596496387 41.0962960117134,-101.043906537626 41.0966086664961,-101.045173733322 41.0965621786973,-101.046562506209 41.0963455692876,-101.047399737172 41.0957308724815)))",
    "wellRegistered": true,
    "registeredPumpRate": 1100,
    "registeredUpdated": "2020-01-14",
    "registeredUserDetails": {
      "registeredUser": "Dennis Brown",
      "registeredFieldName": "Pivot5&7"
    },
    "acresYear": [
      {
        "year": 2022,
        "acres": 147.61
      },
      {
        "year": 2021,
        "acres": 147.61
      },
      {
        "year": 2020,
        "acres": 147.61
      },
      {
        "year": 2019,
        "acres": 147.61
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
</CodeGroup>