websocket-test
====================

ping/pong server for testing websockets in OpenShift

Creating application on OpenShift:

    rhc create-app ping_pong --from-code https://github.com/jwhonce/websocket-test.git

Testing application:

    wscat -c ws://$OPENSHIFT_APP_DNS:8000/ -p 8


If everything is working, the messages you type into wscat should be echo'ed back to you.


This was developed for testing unidling websocket applications on OpenShift Online.


