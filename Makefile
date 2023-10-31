.PHONY: install
install:
	npm --prefix ./frontend/ install && poetry install

.PHONY: poetry-update
poetry-update:
	poetry update

.PHONY: makemigrations
makemigrations:
	poetry run python -m backend.manage makemigrations

.PHONY: migrate
migrate:
	poetry run python -m backend.manage migrate

.PHONY: shell
shell:
	poetry run python -m backend.manage shell

.PHONY: poetry-shell
shell-shell:
	poetry shell

.PHONY: superuser
superuser:
	poetry run python -m backend.manage createsuperuser

.PHONY: update-requirements
update-requirements:
	poetry export --without-hashes --format=requirements.txt > requirements.txt

.PHONY: runserver
runserver:
	npm --prefix ./frontend/ run start & poetry run python -m backend.manage runserver
