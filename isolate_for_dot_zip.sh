#!/bin/bash

DIR=small_palemoon_addon@fl4shk.net
rm -rf $DIR
mkdir $DIR

for iter in chrome defaults locale skin chrome.manifest install.rdf
do
	cp -rf $iter $DIR
done
