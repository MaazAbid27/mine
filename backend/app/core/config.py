from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_env: str = "development"
    port: int = 8000
    mongodb_uri: str = ""
    mongodb_db_name: str = "ember"
    jwt_secret: str = "dev-secret"
    jwt_expires_in: int = 3600
    cors_origins: str = "http://localhost:3000,https://ember-3eb64f17.onrender.com"

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    @property
    def cors_origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


settings = Settings()
