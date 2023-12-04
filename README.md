# Ge-Projekt
ドイツ語インテンシブ1のProjektで作ったキャクタークイズです。オンラインで複数人と対戦することができます。(URL: http://133.27.4.213:8002/)

## ルール
- 回答者がランダムに2人選ばれます。回答者は質問に回答します。
- 回答者以外は特定者となります。特定者はどちらの回答者がどちらの回答を選んだのか2択で予測します。
- 特定者が回答者の回答を当てることができたらポイントが入ります。
- 最終的に最もポイントを獲得した特定者が勝ちです。

## 注意
- このゲームは3人以上で対戦することができます。
- 途中のNextボタンは全員が押すことによって次に進むことができます。
- 開発上の理由で、URLが変わったり、サービスが停止することがあります。
- まだ、一部機能が実装されていないため以下のような不具合があります。
    - ゲームの途中でリロード等を行うとセッションが切断されてしまう。
    - 特定ページに画像が挿入されていない。
    - PC版では多少コンポーネントがアンバランスになる。

## 技術的な話
- フロントエンドはReactを用いて書かれています。
- バックエンドはFastAPI（PythonによるWeb API開発用フレームワーク）を用いて書かれています。
- フロントエンドとバックエンドの間は通常、HTTPによる同期通信を用い、ゲーム中はWebSocketによる非同期通信を行っています。

## Future work
- セッションの保持
- 特定ページへの画像の挿入
- PWA化
