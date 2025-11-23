// Configuration du jeu
const TILE_SIZE = 20;
const GRID_WIDTH = 28;
const GRID_HEIGHT = 31;

// Labyrinthe - 1 = mur, 0 = point, 2 = super-point, 3 = vide
const MAZE = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,2,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,1,1,1,3,1,1,3,1,1,1,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,1,1,1,3,1,1,3,1,1,1,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,1,1,1,3,3,1,1,1,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,1,3,3,3,3,3,3,1,3,1,1,0,1,1,1,1,1,1],
    [3,3,3,3,3,3,0,3,3,3,1,3,3,3,3,3,3,1,3,3,3,0,3,3,3,3,3,3],
    [1,1,1,1,1,1,0,1,1,3,1,3,3,3,3,3,3,1,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,1,1,1,1,1,1,1,1,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,1,1,1,1,1,1,1,1,3,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,3,1,1,1,1,1,1,1,1,3,1,1,0,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,2,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,1,1,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,1,1,0,0,0,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

// Variables du jeu
let canvas, ctx;
let score = 0;
let hiScore = 0;
let lives = 3;
let gameRunning = false;
let gamePaused = false;
let animationFrame = 0;
let totalDots = 0;
let dotsEaten = 0;
let powerUpActive = false;
let powerUpTimer = 0;

// Pac-Man
const pacman = {
    x: 14,
    y: 23,
    direction: 0, // 0=droite, 1=bas, 2=gauche, 3=haut
    nextDirection: 0,
    speed: 0.15,
    mouthOpen: 0,
    pixelX: 14 * TILE_SIZE,
    pixelY: 23 * TILE_SIZE
};

// Fantômes
const ghosts = [
    { x: 12, y: 14, direction: 0, color: '#FF0000', name: 'Blinky', startX: 12, startY: 14, mode: 'chase' },
    { x: 14, y: 14, direction: 0, color: '#FFB8FF', name: 'Pinky', startX: 14, startY: 14, mode: 'chase' },
    { x: 13, y: 14, direction: 0, color: '#00FFFF', name: 'Inky', startX: 13, startY: 14, mode: 'scatter' },
    { x: 15, y: 14, direction: 0, color: '#FFB852', name: 'Clyde', startX: 15, startY: 14, mode: 'scatter' }
];

// Grille pour les points
let dotsGrid = [];

// Initialisation
function init() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');

    // Compter et créer les points
    dotsGrid = MAZE.map(row => [...row]);
    totalDots = 0;
    for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < GRID_WIDTH; x++) {
            if (dotsGrid[y][x] === 0 || dotsGrid[y][x] === 2) {
                totalDots++;
            }
        }
    }

    // Événements
    document.addEventListener('keydown', handleKeyPress);
    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('pauseBtn').addEventListener('click', togglePause);

    // Dessiner l'écran initial
    draw();
}

// Démarrer le jeu
function startGame() {
    score = 0;
    lives = 3;
    dotsEaten = 0;
    gameRunning = true;
    gamePaused = false;
    powerUpActive = false;

    // Réinitialiser Pac-Man
    pacman.x = 14;
    pacman.y = 23;
    pacman.pixelX = 14 * TILE_SIZE;
    pacman.pixelY = 23 * TILE_SIZE;
    pacman.direction = 0;
    pacman.nextDirection = 0;

    // Réinitialiser les fantômes
    ghosts.forEach(ghost => {
        ghost.x = ghost.startX;
        ghost.y = ghost.startY;
        ghost.mode = Math.random() > 0.5 ? 'chase' : 'scatter';
    });

    // Réinitialiser les points
    dotsGrid = MAZE.map(row => [...row]);

    updateScore();
    document.getElementById('gameStatus').textContent = '';
    document.getElementById('gameStatus').className = 'game-status';

    gameLoop();
}

// Pause
function togglePause() {
    if (gameRunning) {
        gamePaused = !gamePaused;
        if (!gamePaused) {
            gameLoop();
        }
    }
}

// Gestion des touches
function handleKeyPress(e) {
    if (!gameRunning) return;

    switch(e.key) {
        case 'ArrowUp':
            pacman.nextDirection = 3;
            e.preventDefault();
            break;
        case 'ArrowDown':
            pacman.nextDirection = 1;
            e.preventDefault();
            break;
        case 'ArrowLeft':
            pacman.nextDirection = 2;
            e.preventDefault();
            break;
        case 'ArrowRight':
            pacman.nextDirection = 0;
            e.preventDefault();
            break;
    }
}

// Vérifier si un déplacement est possible
function canMove(x, y) {
    const gridX = Math.round(x);
    const gridY = Math.round(y);

    if (gridX < 0 || gridX >= GRID_WIDTH || gridY < 0 || gridY >= GRID_HEIGHT) {
        return false;
    }

    return MAZE[gridY][gridX] !== 1;
}

// Mettre à jour Pac-Man
function updatePacman() {
    // Essayer de tourner
    const nextX = pacman.x + [1, 0, -1, 0][pacman.nextDirection] * pacman.speed;
    const nextY = pacman.y + [0, 1, 0, -1][pacman.nextDirection] * pacman.speed;

    if (canMove(nextX, nextY)) {
        pacman.direction = pacman.nextDirection;
    }

    // Déplacer
    const newX = pacman.x + [1, 0, -1, 0][pacman.direction] * pacman.speed;
    const newY = pacman.y + [0, 1, 0, -1][pacman.direction] * pacman.speed;

    if (canMove(newX, newY)) {
        pacman.x = newX;
        pacman.y = newY;
    }

    // Téléportation (tunnels)
    if (pacman.x < 0) pacman.x = GRID_WIDTH - 1;
    if (pacman.x >= GRID_WIDTH) pacman.x = 0;

    // Arrondir pour la grille
    const gridX = Math.round(pacman.x);
    const gridY = Math.round(pacman.y);

    // Manger les points
    if (dotsGrid[gridY] && dotsGrid[gridY][gridX] === 0) {
        dotsGrid[gridY][gridX] = 3;
        score += 10;
        dotsEaten++;
        updateScore();
    }

    // Manger les super-points
    if (dotsGrid[gridY] && dotsGrid[gridY][gridX] === 2) {
        dotsGrid[gridY][gridX] = 3;
        score += 50;
        dotsEaten++;
        powerUpActive = true;
        powerUpTimer = 200; // ~6 secondes à 30 FPS
        updateScore();
    }

    // Vérifier victoire
    if (dotsEaten >= totalDots) {
        winGame();
    }

    // Animation bouche
    pacman.mouthOpen = (pacman.mouthOpen + 0.15) % Math.PI;

    pacman.pixelX = pacman.x * TILE_SIZE;
    pacman.pixelY = pacman.y * TILE_SIZE;
}

// Mettre à jour les fantômes
function updateGhosts() {
    if (powerUpActive) {
        powerUpTimer--;
        if (powerUpTimer <= 0) {
            powerUpActive = false;
        }
    }

    ghosts.forEach((ghost, index) => {
        // IA simple pour chaque fantôme
        let targetX, targetY;

        if (powerUpActive) {
            // Fuir Pac-Man
            targetX = ghost.x + (ghost.x - pacman.x);
            targetY = ghost.y + (ghost.y - pacman.y);
        } else {
            // Comportement selon le mode
            if (ghost.mode === 'chase') {
                // Poursuivre Pac-Man
                targetX = pacman.x;
                targetY = pacman.y;

                // Prédire la position pour certains fantômes
                if (index === 1) { // Pinky
                    targetX += [4, 0, -4, 0][pacman.direction];
                    targetY += [0, 4, 0, -4][pacman.direction];
                }
            } else {
                // Mode scatter - aller dans un coin
                const corners = [[2, 2], [25, 2], [2, 29], [25, 29]];
                targetX = corners[index][0];
                targetY = corners[index][1];
            }
        }

        // Changer de mode aléatoirement
        if (Math.random() < 0.002 && !powerUpActive) {
            ghost.mode = ghost.mode === 'chase' ? 'scatter' : 'chase';
        }

        // Trouver la meilleure direction
        let bestDir = ghost.direction;
        let bestDist = Infinity;

        for (let dir = 0; dir < 4; dir++) {
            // Ne pas faire demi-tour
            if ((ghost.direction + 2) % 4 === dir) continue;

            const testX = ghost.x + [0.3, 0, -0.3, 0][dir];
            const testY = ghost.y + [0, 0.3, 0, -0.3][dir];

            if (canMove(testX, testY)) {
                const dist = Math.sqrt(Math.pow(testX - targetX, 2) + Math.pow(testY - targetY, 2));
                if (dist < bestDist) {
                    bestDist = dist;
                    bestDir = dir;
                }
            }
        }

        ghost.direction = bestDir;

        // Déplacer le fantôme
        const speed = powerUpActive ? 0.08 : 0.12;
        ghost.x += [0.12, 0, -0.12, 0][ghost.direction];
        ghost.y += [0, 0.12, 0, -0.12][ghost.direction];

        // Téléportation
        if (ghost.x < 0) ghost.x = GRID_WIDTH - 1;
        if (ghost.x >= GRID_WIDTH) ghost.x = 0;

        // Collision avec Pac-Man
        const dist = Math.sqrt(Math.pow(ghost.x - pacman.x, 2) + Math.pow(ghost.y - pacman.y, 2));
        if (dist < 0.5) {
            if (powerUpActive) {
                // Manger le fantôme
                score += 200;
                updateScore();
                ghost.x = ghost.startX;
                ghost.y = ghost.startY;
            } else {
                // Perdre une vie
                loseLife();
            }
        }
    });
}

// Perdre une vie
function loseLife() {
    lives--;
    updateScore();

    if (lives <= 0) {
        gameOver();
    } else {
        // Réinitialiser les positions
        pacman.x = 14;
        pacman.y = 23;
        pacman.pixelX = 14 * TILE_SIZE;
        pacman.pixelY = 23 * TILE_SIZE;
        pacman.direction = 0;
        pacman.nextDirection = 0;

        ghosts.forEach(ghost => {
            ghost.x = ghost.startX;
            ghost.y = ghost.startY;
        });

        powerUpActive = false;
    }
}

// Victoire
function winGame() {
    gameRunning = false;
    document.getElementById('gameStatus').textContent = '🎉 VICTOIRE ! VOUS AVEZ GAGNÉ ! 🎉';
    document.getElementById('gameStatus').className = 'game-status win';

    if (score > hiScore) {
        hiScore = score;
        updateScore();
    }
}

// Game Over
function gameOver() {
    gameRunning = false;
    document.getElementById('gameStatus').textContent = '💀 GAME OVER 💀';
    document.getElementById('gameStatus').className = 'game-status lose';

    if (score > hiScore) {
        hiScore = score;
        updateScore();
    }
}

// Mettre à jour le score
function updateScore() {
    document.getElementById('score').textContent = score;
    document.getElementById('hiScore').textContent = hiScore;
    document.getElementById('lives').textContent = lives;
}

// Dessiner
function draw() {
    // Effacer
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dessiner le labyrinthe
    for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < GRID_WIDTH; x++) {
            const tile = MAZE[y][x];

            if (tile === 1) {
                // Mur - style Atari pixelisé
                ctx.fillStyle = '#0000FF';
                ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                ctx.strokeStyle = '#6666FF';
                ctx.lineWidth = 2;
                ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            }
        }
    }

    // Dessiner les points
    for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < GRID_WIDTH; x++) {
            const tile = dotsGrid[y][x];

            if (tile === 0) {
                // Point normal
                ctx.fillStyle = '#FFB8FF';
                ctx.fillRect(x * TILE_SIZE + 8, y * TILE_SIZE + 8, 4, 4);
            } else if (tile === 2) {
                // Super-point
                ctx.fillStyle = '#FFF';
                const pulse = Math.sin(animationFrame * 0.1) * 2 + 6;
                ctx.fillRect(x * TILE_SIZE + 10 - pulse/2, y * TILE_SIZE + 10 - pulse/2, pulse, pulse);
            }
        }
    }

    // Dessiner Pac-Man - style Atari 2600 (carré jaune avec bouche)
    ctx.save();
    ctx.translate(pacman.pixelX + TILE_SIZE/2, pacman.pixelY + TILE_SIZE/2);
    ctx.rotate([0, Math.PI/2, Math.PI, -Math.PI/2][pacman.direction]);

    ctx.fillStyle = '#FFFF00';
    const size = 16;

    // Corps
    ctx.beginPath();
    ctx.arc(0, 0, size/2, Math.sin(pacman.mouthOpen) * 0.4, -Math.sin(pacman.mouthOpen) * 0.4);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

    // Dessiner les fantômes - style Atari 2600 (carrés colorés simples)
    ghosts.forEach(ghost => {
        const ghostSize = 16;
        const ghostX = ghost.x * TILE_SIZE + TILE_SIZE/2;
        const ghostY = ghost.y * TILE_SIZE + TILE_SIZE/2;

        if (powerUpActive) {
            // Fantômes bleus quand vulnérables
            ctx.fillStyle = powerUpTimer < 60 && animationFrame % 20 < 10 ? '#FFF' : '#0000FF';
        } else {
            ctx.fillStyle = ghost.color;
        }

        // Corps du fantôme
        ctx.fillRect(ghostX - ghostSize/2, ghostY - ghostSize/2, ghostSize, ghostSize);

        // Yeux (style très simple Atari)
        ctx.fillStyle = '#FFF';
        ctx.fillRect(ghostX - 5, ghostY - 3, 3, 3);
        ctx.fillRect(ghostX + 2, ghostY - 3, 3, 3);

        if (!powerUpActive) {
            ctx.fillStyle = '#000';
            ctx.fillRect(ghostX - 4, ghostY - 2, 2, 2);
            ctx.fillRect(ghostX + 3, ghostY - 2, 2, 2);
        }
    });

    animationFrame++;
}

// Boucle de jeu
function gameLoop() {
    if (!gameRunning || gamePaused) return;

    updatePacman();
    updateGhosts();
    draw();

    requestAnimationFrame(gameLoop);
}

// Démarrer au chargement
window.addEventListener('load', init);
