FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

ADD docker/default.conf /etc/nginx/conf.d/
COPY dist/ /usr/share/nginx/html/
