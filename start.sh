if [ -z "$PORT" ]
then
      meteor run --port $PORT
else
      meteor run
fi
