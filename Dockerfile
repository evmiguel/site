FROM nginx:1.25.3-alpine

# I know this is not best practice
# TODO: make this into a configuration
COPY index.html /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html

# Turn daemon off so we can see the logs
CMD ["nginx", "-g", "daemon off;"]
