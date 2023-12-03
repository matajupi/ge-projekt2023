# Ge-Projekt
## シナリオ
- ゲームプロセス
    - 回答者選別
    - ゲームループ
        - 回答者回答
        - 回答者の回答表示
        - 回答者の意見が別れた
            - 特定者が特定
            - 特定結果の表示
            - 特定者への点数の加算
    - ゲーム結果を表示

- ゲーム作成
    - 新規ゲーム作成を選択
    - ゲーム名を登録（一意）
    - 参加者待ち
    - ゲーム開始
        - 3人以上集まっている
            - 開始
        - そうでない
            - 終了

- ゲーム参加
    - 参加するゲームを選択
    - 自分の名前を登録（一意）
    - 参加者待ち
    - ゲーム開始

- ダッシュボードによる追跡
    - 追跡するゲームを選択
    - 回答者の回答、特定者の回答、特定者の点数を表示

## 画面
- HomePage（新規ゲーム作成 or ゲームに参加）
- CreateGamePage（ゲーム名の登録）
- GameListPage（参加可能ゲーム一覧）
- JoinGamePage（名前の登録）
- StandbyPage（参加者一覧、作成者であれば開始、削除ボタン）
- RolePage（それぞれの役割を表示）
- QandAPage（質問、回答一覧、回答者であれば回答可能）
- QAnswerPage（回答者の回答を一覧）
- IdentifyPage（どっちがどっちか特定する、特定者であれば特定可能）
- IAnswerPage（全員の特定結果と正解を表示）
- ScorePage（全員のスコアを表示）
- RankingPage（ゲーム結果を表示）

## API
- PlayerModel{ name: str, game\_id: str }
- GameModel{ id: str, organizer: str, players: [str], waiting: bool }] }

- [GET] /games
    - すべてのゲーム一覧を取得 response: [GameModel]
- [POST] /games
    - 新しいゲームを作成 request: GameModel response: GameModel
- [DELETE] /games/{game\_id}
    - ゲームを削除
- [POST] /games/{game\_id}/start
    - ゲームを開始
- [WS] /players
    - 個別のプレイヤーを登録して、非同期通信を開始
    - Session:
        - if has SID then
            - request SID, response SID
        - else
            - request PlayerModel, response SID
        - response GameStateModel if Game changed
        - request Choice if choice required
        - request Session close if user close force

