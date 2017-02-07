#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
- sshpass -e git remote add master $SSHPATH
- sshpass -e git push master
- ssh-keyscan -H $DEPLOY_HOST >> ~/.ssh/known_hosts
fi
