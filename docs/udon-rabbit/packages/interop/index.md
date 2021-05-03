---
title: UdonRabbit Interop
---

# UdonRabbit Interop

UdonRabbit Interop は、よく使うコンポーネントや UdonRabbit および他製品間との相互運用性のためのパッケージです。  
このパッケージを導入することで、 UdonRabbit 製品およびこのフレームワークを使って実装されている他者作成のその他製品とを、ユーザーが自由に組み合わせ、新しいギミックを Udon の知識が無くても作成することが可能になります。

このパッケージを導入するメリットは、以下の通りです。

-   (ユーザー) 特定の販売者にロックイン (入れ替えることが困難になること) されることなく、販売ギミックを自由に組み合わせが出来るようになる
-   (ユーザー) Udon や Unity の難しい知識が無くても、 SDK2 の感覚で新しいギミックを作成することが出来るようになる
-   (ユーザー) わかりやすいエラー通知で、自分でエラーの解決が出来るようになる
-   (開発者) 文字列ベースでの操作ではないので、ユーザーサポートの量が減る
-   (開発者) UdonSharp の型がある状態で、疎結合のギミックをこねることができるので、小さな単位で配布がしやすくなる (例: かっこいいボタンだけ、など)
-   (開発者) 型チェックが有効な状態で、パラメータなどを送受信することが出来るようになる

なお、 UdonRabbit Interop はオープンソースソフトウェアとして開発しており、開発者や利用者からの提案などを受け付けています。  
詳しくは、以下のリポジトリを参照ください。

-   [mika-f/UdonRabbit.Interop](https://github.com/mika-f/UdonRabbit.Interop){target=\_blank}