FROM alpine:3.14

# Create a script to print timestamp
RUN echo '#!/bin/sh' > /print_timestamp.sh && \
    echo 'date "+%Y-%m-%d %H:%M:%S"' >> /print_timestamp.sh && \
    chmod +x /print_timestamp.sh

# Set the script as the entrypoint
ENTRYPOINT ["/print_timestamp.sh"]