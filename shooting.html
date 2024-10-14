<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>슈팅 게임</title>
    <style>
        #gameCanvas {
            border: 1px solid black;
            background-color: black; /* 배경을 검정으로 설정 */
        }
    </style>
</head>
<body>
    <h1>슈팅 게임</h1>
    <canvas id="gameCanvas" width="800" height="600"></canvas>

    <script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        // 게임 오브젝트
        const player = {
            x: 400,
            y: 500,
            size: 40,
            speed: 5,
            health: 100,
            score: 0
        };

        const boss = {
            x: 400,
            y: 100,
            size: 100,
            health: 500,
            maxHealth: 500,
            phase: 1
        };

        const bullets = [];
        const bossBullets = [];
        const minions = [];
        const MAX_MINIONS = 5;

        // 키 입력 처리
        const keys = {};
        document.addEventListener('keydown', (e) => {
            keys[e.code] = true;
            if (e.code === 'Space') {
                bullets.push({x: player.x + player.size / 2, y: player.y, size: 5, speed: 10});
            }
        });
        document.addEventListener('keyup', (e) => {
            keys[e.code] = false;
        });

        // 게임 루프
        function gameLoop() {
            // 플레이어 이동
            if (keys['ArrowLeft']) player.x = Math.max(0, player.x - player.speed);
            if (keys['ArrowRight']) player.x = Math.min(canvas.width - player.size, player.x + player.speed);

            // 총알 이동
            bullets.forEach((bullet, index) => {
                bullet.y -= bullet.speed;
                if (bullet.y < 0) bullets.splice(index, 1);
            });

            // 보스 행동
            bossBehavior();

            // 보스 총알 이동
            bossBullets.forEach((bullet, index) => {
                bullet.y += bullet.speed;
                if (bullet.y > canvas.height) bossBullets.splice(index, 1);
            });

            // 작은 적 행동
            minionBehavior();

            // 충돌 감지
            collisionDetection();

            // 화면 그리기
            draw();

            // 게임 상태 체크
            checkGameState();

            // 다음 프레임 요청
            requestAnimationFrame(gameLoop);
        }

        function bossBehavior() {
            // 보스의 체력에 따라 페이즈 변경
            if (boss.health <= 250 && boss.phase === 1) {
                boss.phase = 2;
            }

            // 보스 이동 (좌우로 천천히 이동)
            boss.x += Math.sin(Date.now() / 1000) * 2;

            // 보스 공격
            if (Math.random() < 0.05) {
                if (boss.phase === 1) {
                    // 페이즈 1: 일반 총알
                    bossBullets.push({x: boss.x + boss.size / 2, y: boss.y + boss.size, size: 10, speed: 5});
                } else {
                    // 페이즈 2: 산탄
                    for (let i = -2; i <= 2; i++) {
                        bossBullets.push({x: boss.x + boss.size / 2, y: boss.y + boss.size, size: 10, speed: 5, dx: i});
                    }
                }
            }
        }

        function minionBehavior() {
            // 작은 적 생성
            if (minions.length < MAX_MINIONS && Math.random() < 0.02) {
                minions.push({
                    x: Math.random() * (canvas.width - 30),
                    y: 150,
                    size: 30,
                    speed: 2,
                    health: 30
                });
            }

            // 작은 적 이동
            minions.forEach((minion, index) => {
                minion.y += minion.speed;
                if (minion.y > canvas.height) {
                    minions.splice(index, 1);
                }
            });
        }

        function collisionDetection() {
            // 플레이어 총알과 보스 충돌
            bullets.forEach((bullet, bulletIndex) => {
                if (
                    bullet.x < boss.x + boss.size &&
                    bullet.x + bullet.size > boss.x &&
                    bullet.y < boss.y + boss.size &&
                    bullet.y + bullet.size > boss.y
                ) {
                    boss.health -= 10;
                    player.score += 10;
                    bullets.splice(bulletIndex, 1);
                }
            });

            // 플레이어 총알과 작은 적 충돌
            bullets.forEach((bullet, bulletIndex) => {
                minions.forEach((minion, minionIndex) => {
                    if (
                        bullet.x < minion.x + minion.size &&
                        bullet.x + bullet.size > minion.x &&
                        bullet.y < minion.y + minion.size &&
                        bullet.y + bullet.size > minion.y
                    ) {
                        minion.health -= 10;
                        if (minion.health <= 0) {
                            minions.splice(minionIndex, 1);
                            player.score += 5;
                        }
                        bullets.splice(bulletIndex, 1);
                    }
                });
            });

            // 보스 총알과 플레이어 충돌
            bossBullets.forEach((bullet, bulletIndex) => {
                if (
                    bullet.x < player.x + player.size &&
                    bullet.x + bullet.size > player.x &&
                    bullet.y < player.y + player.size &&
                    bullet.y + bullet.size > player.y
                ) {
                    player.health -= 10;
                    bossBullets.splice(bulletIndex, 1);
                }
            });

            // 작은 적과 플레이어 충돌
            minions.forEach((minion, minionIndex) => {
                if (
                    minion.x < player.x + player.size &&
                    minion.x + minion.size > player.x &&
                    minion.y < player.y + player.size &&
                    minion.y + minion.size > player.y
                ) {
                    player.health -= 5;
                    minions.splice(minionIndex, 1);
                }
            });
        }

        function draw() {
            // 화면 지우기
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 길 그리기 (플레이어 아래)
            ctx.fillStyle = 'gray'; // 길 색상
            ctx.fillRect(0, player.y + player.size, canvas.width, 5); // 가로 길이만큼의 줄

            // 플레이어 그리기
            ctx.fillStyle = 'blue';
            ctx.fillRect(player.x, player.y, player.size, player.size);

            // 보스 그리기
            ctx.fillStyle = 'red';
            ctx.fillRect(boss.x, boss.y, boss.size, boss.size);

            // 총알 그리기
            ctx.fillStyle = 'green';
            bullets.forEach(bullet => {
                ctx.fillRect(bullet.x, bullet.y, bullet.size, bullet.size);
            });

            // 보스 총알 그리기
            ctx.fillStyle = 'orange';
            bossBullets.forEach(bullet => {
                ctx.fillRect(bullet.x, bullet.y, bullet.size, bullet.size);
            });

            // 작은 적 그리기
            ctx.fillStyle = 'purple';
            minions.forEach(minion => {
                ctx.fillRect(minion.x, minion.y, minion.size, minion.size);
            });

            // UI 그리기
            ctx.fillStyle = 'white';
            ctx.font = '20px Arial';
            ctx.fillText(`플레이어 체력: ${player.health}`, 10, 30);
            ctx.fillText(`보스 체력: ${boss.health}`, 10, 60);
        }

        function checkGameState() {
            if (player.health <= 0) {
                alert('게임 오버!');
                resetGame();
            }
            if (boss.health <= 0) {
                alert('승리!');
                resetGame();
            }
        }

        function resetGame() {
            player.health = 100;
            player.score = 0;
            player.x = 400;
            player.y = 500;
            boss.health = 500;
            boss.phase = 1;
            boss.x = 400;
            boss.y = 100;
            bullets.length = 0;
            bossBullets.length = 0;
            minions.length = 0;
        }

        // 게임 시작
        gameLoop();
    </script>
</body>
</html>
