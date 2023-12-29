data "cloudflare_zone" "strottos_dev" {
  name = "strottos.dev"
}

resource "cloudflare_record" "root" {
  zone_id = data.cloudflare_zone.strottos_dev.id
  name    = "@"
  value   = cloudflare_pages_project.nextjs_site.subdomain
  type    = "CNAME"
  proxied = true
}

resource "cloudflare_record" "www" {
  zone_id = data.cloudflare_zone.strottos_dev.id
  name    = "www"
  value   = cloudflare_pages_project.nextjs_site.subdomain
  type    = "CNAME"
  proxied = true
}

resource "cloudflare_record" "dev" {
  zone_id = data.cloudflare_zone.strottos_dev.id
  name    = "dev"
  value   = "dev.${cloudflare_pages_project.nextjs_site.subdomain}"
  type    = "CNAME"
  proxied = true
}
