locals {
  bucket_name = "strottos-${data.aws_caller_identity.current.account_id}-${var.environment}-site"
}
