.PHONY: install
install:
	npm --prefix ./frontend/ install && poetry install

.PHONY: poetry-update
poetry-update:
	poetry update

.PHONY: makemigrations
makemigrations:
	poetry run python manage.py makemigrations

.PHONY: migrate
migrate:
	poetry run python manage.py migrate

.PHONY: shell
shell:
	poetry run python manage.py shell

.PHONY: poetry-shell
shell-shell:
	poetry shell

.PHONY: superuser
superuser:
	poetry run python manage.py createsuperuser

.PHONY: update-requirements
update-requirements:
	poetry export --without-hashes --format=requirements.txt > requirements.txt

.PHONY: runserver
runserver:
	poetry run python -m backend.manage runserver

# .PHONY: runserver
# runserver:
# 	npm --prefix ./frontend/ run start & poetry run python manage.py runserver

