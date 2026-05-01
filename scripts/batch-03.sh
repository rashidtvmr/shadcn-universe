#!/usr/bin/env bash
set -euo pipefail
LOG_FILE="$(pwd)/batch-03.log"
mkdir -p "$(pwd)/packages/components/batch-03"
> "$LOG_FILE"

# Process repositories 201-300
sed -n '201,300p' repos/all_github_repos.txt | while read -r URL; do
  URL=$(echo "$URL" | tr -d '\r' | sed 's/)[[:space:]]*$//')
  [ -z "$URL" ] && continue
  REPO_NAME=$(basename "$URL" .git)
  echo "Processing $REPO_NAME..." | tee -a "$LOG_FILE"
  TMP_DIR=$(mktemp -d)
  if ! git clone --depth 1 "$URL" "$TMP_DIR" >>"$LOG_FILE" 2>&1; then
    echo "Clone failed: $URL" | tee -a "$LOG_FILE"
    rm -rf "$TMP_DIR"
    continue
  fi
  if [ -d "$TMP_DIR/components" ]; then
    SRC_DIR="$TMP_DIR/components"
  elif [ -d "$TMP_DIR/src/components" ]; then
    SRC_DIR="$TMP_DIR/src/components"
  elif [ -d "$TMP_DIR/src" ]; then
    SRC_DIR="$TMP_DIR/src"
  else
    echo "No component directory found in $URL" | tee -a "$LOG_FILE"
    rm -rf "$TMP_DIR"
    continue
  fi
  DEST_DIR="packages/components/batch-03/$REPO_NAME"
  mkdir -p "$DEST_DIR"
  cp -r "$SRC_DIR"/. "$DEST_DIR"/ || echo "Copy failed for $REPO_NAME" | tee -a "$LOG_FILE"
  rm -rf "$TMP_DIR"
  echo "Done $REPO_NAME" | tee -a "$LOG_FILE"
done

echo "Batch 03 processing completed. Log at $LOG_FILE"