# Delete Claim

### URL

```:no-line-numbers
DELETE {{server_url}}/claims/{{id}}
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_delete_claim</p>
</div>


### Response - 200

```json
{
  "message": "User claim deleted successfully.",
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Invalid Claim ID" active>

```json
{
  "message": "Invalid claim ID. No matching claim found in the database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
