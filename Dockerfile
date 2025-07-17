# Dockerfile pour portfolio Next.js
# Étape 1 : Build
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances (production + build)
RUN npm ci

# Copier le reste du code source
COPY . .

# Build l'application Next.js
RUN npm run build

# Étape 2 : Image finale, plus légère
FROM node:20-alpine AS runner

WORKDIR /app

# Copier uniquement le build et les fichiers nécessaires
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

# Utiliser un user non-root pour la sécurité
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
USER nextjs

# Exposer le port par défaut de Next.js
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"] 