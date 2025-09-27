#!/bin/bash

CORRECT_PIN="1234"
MAX_ATTEMPTS=3
attempt=1

while [ $attempt -le $MAX_ATTEMPTS ]; do
    read -s -p "Enter PIN (Attempt $attempt/$MAX_ATTEMPTS): " PIN_NUMBER
    echo
    if [ "$PIN_NUMBER" == "$CORRECT_PIN" ]; then
        echo "✅ Access Granted"
        exit 0
    else
        echo "❌ Incorrect PIN"
    fi
    attempt=$((attempt+1))
done

echo "🚫 Too many failed attempts. Access locked!"
exit 1
