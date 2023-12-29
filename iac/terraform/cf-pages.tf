resource "cloudflare_pages_project" "nextjs_site" {
  account_id        = var.cloudflare_account_id
  name              = "${var.environment == "dev" ? "dev-" : ""}site-nextjs-strottos-dev"
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
      compatibility_flags = ["nodejs_compat", "streams_enable_constructors"]
    }
  }
}
