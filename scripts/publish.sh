#!/usr/bin/env bash
# Rebuild the site and publish the static export to the `deploy` branch on
# GitHub. HestiaCP (or any host) then only needs: git pull --ff-only origin deploy
set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Building site"
npm --prefix web run build

echo "==> Creating deploy commit from web/out"
TMPINDEX=$(mktemp)
export GIT_INDEX_FILE="$TMPINDEX"
git read-tree --empty
git --work-tree=web/out add -A
TREE=$(git write-tree)
SRC_HEAD=$(git rev-parse --short HEAD)
if git rev-parse --verify refs/remotes/origin/deploy >/dev/null 2>&1; then
  PARENT=$(git rev-parse refs/remotes/origin/deploy)
  COMMIT=$(git commit-tree "$TREE" -p "$PARENT" -m "Static export build of master $SRC_HEAD")
else
  COMMIT=$(git commit-tree "$TREE" -m "Static export build of master $SRC_HEAD")
fi
unset GIT_INDEX_FILE
rm -f "$TMPINDEX"

echo "==> Pushing deploy branch"
git push origin "$COMMIT:refs/heads/deploy"

echo "==> Done: origin/deploy = $COMMIT (built from master $SRC_HEAD)"
echo "    Publish on server: git -C ~/apps/concom/site pull --ff-only origin deploy"
