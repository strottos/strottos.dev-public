resource "aws_s3_bucket" "site_frontend" {
  bucket = local.bucket_name

  tags = {
    Environment = var.environment
  }
}
