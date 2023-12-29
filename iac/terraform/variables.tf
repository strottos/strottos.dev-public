variable "cloudflare_api_token" {
    type        = string
    description = "Cloudflare API Token"
    sensitive   = true
}

variable "cloudflare_account_id" {
    type        = string
    description = "Cloudflare Account ID"
    sensitive   = true
}

variable "environment" {
    type    = string
    default = "dev"
}
