FROM python:2.7-alpine
COPY server/requirements.txt requirements.txt
COPY server/app.py app.py
RUN pip install -r requirements.txt
EXPOSE 5000
ENTRYPOINT [ "python app.py" ]

FROM nginx:latest
COPY dist/ /usr/share/nginx/html