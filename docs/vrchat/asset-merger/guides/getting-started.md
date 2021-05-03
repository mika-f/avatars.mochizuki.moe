---
title: Asset Merger のインストール
---

# Asset Merger のインストール

## ダウンロード

Asset Merger は BOOTH にて配布しています。  
以下の BOOTH ページから、最新のパッケージをダウンロードしてください。

-   [BOOTH](https://natsuneko.booth.pm/items/2281798){target=\_blank}

何らかの理由で過去のバージョンを使用したい場合は、 GitHub Releases もしくは BOOTH の「ライブラリ」より、
過去のバージョンをダウンロードすることが可能です。

-   [GitHub Releases](https://github.com/mika-f/VRChat-AssetMerger/releases){target=\_blank}
-   [BOOTH ライブラリ](https://accounts.booth.pm/library){target=\_blank} (購入者限定)

## 動作環境

Asset Merger を使用するには、プロジェクトにあらかじめ以下のものが導入されている必要があります。

-   Unity 2018.4.20f1
-   VRCSDK3 AVATAR 2020.08.13.17.48 以降
    -   詳しくは[動作確認済みバージョン](#動作確認済みバージョン)を確認してください

## インストール

ダウンロードした ZIP ファイルを解凍し、中身の UnityPackage をプロジェクトへインポートしてください。

## アップデート

最新の UnityPackage をそのまま上書きインポートしてください。

## アンインストール

Asset Merger をアンインストールする場合、以下のディレクトリ以下のファイルを削除してください。

-   `Assets/Mochizuki/VRChat/AssetMerger`

## 動作確認済みバージョン

以下のバージョンの VRCSDK にて動作を保証しています。  
ただし、動作保証外のバージョンにおいても、記載されているバージョンの範囲内であれば問題なく動作・使用することができます。

<!-- prettier-ignore-start -->
=== "0.3.x まで"
    - VRCSDK3 AVATAR 2020.08.13.17.48
    - VRCSDK3 AVATAR 2020.08.06.16.30

=== "0.4.0 以降"
    - VRCSDK3 AVATAR 2020.19.09.04.45
    - VRCSDK3 AVATAR 2021.02.23.11.41
<!-- prettier-ignore-end -->