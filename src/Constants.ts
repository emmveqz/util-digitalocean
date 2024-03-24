
export const API_BASE = "https://api.digitalocean.com"

export const URI_DNSRECORD_CREATE = "/v2/domains/{domain_name}/records"

export const URI_DROPLET_ACTION_CREATE = "/v2/droplets/{droplet_id}/actions"

export const URI_DROPLET_ACTION_GET = "/v2/droplets/{droplet_id}/actions/{action_id}"

export const URI_DROPLET_CREATE = "/v2/droplets"

export const URI_DROPLET_GET = "/v2/droplets/{droplet_id}"

export const URI_SSHKEY_LIST = "/v2/account/keys?per_page=200"

export const URI_SNAPSHOT_LIST = "/v2/snapshots?per_page=200&resource_type=droplet"
