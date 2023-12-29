resource "cloudflare_pages_project" "nextjs_site" {
  account_id        = var.cloudflare_account_id
  name              = "site-strottos-dev"
  production_branch = "main"

  deployment_configs {
    preview {
      environment_variables = {
        ENVIRONMENT = "preview"
      }
      compatibility_date  = "2023-12-06"
      compatibility_flags = ["nodejs_compat"]
    }
    production {
      environment_variables = {
        ENVIRONMENT = "production"
      }
      compatibility_date  = "2023-12-06"
      compatibility_flags = ["nodejs_compat"]
    }
  }
}

resource "cloudflare_pages_domain" "prod_domain" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.nextjs_site.name
  domain       = "strottos.dev"
}

resource "cloudflare_pages_domain" "prod_www_domain" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.nextjs_site.name
  domain       = "www.strottos.dev"
}

resource "cloudflare_pages_domain" "dev_domain" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.nextjs_site.name
  domain       = "dev.strottos.dev"
}
