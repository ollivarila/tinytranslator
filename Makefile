init:
	python3 -m venv .venv
	. .venv/bin/activate
	pip install -r requirements.txt

run:
	flask --app server run

debug:
	flask --app server --debug run

clean:
	rm -rf __pycache__/
	rm -rf .venv/
	deactivate 2> /dev/null || true