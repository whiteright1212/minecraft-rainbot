# minecraft-rainbot
[Heroku Paas](http://www.heroku.com)專用的Minecraft機器人,由Node.js編寫而成

# 安裝
1. Github端
    1. 登入現有帳號或註冊一個
    2. 按此專案右上角的Fork
  
2. Heroku端
    1. 前往Heroku官方網站並註冊一個新帳號,或使用現有帳號登入
    2. 前往Heroku控制台[點我](https://dashboard.heroku.com) -> 右上角New -> 選擇Create new app
    3. 切換到下個畫面後,填入App Name(自己取),完成後按Create app 
    4. 接著會進入到App的Deploy子畫面 -> Deployment method選Github -> 按Connect to GitHub -> 跳出視窗點Authorize heroku
    5. 連結後在repo-name那個打專案名後按Search -> 選搜尋結果裡剛剛Github Fork的專案按Connect
    6. 接著先切換到Settings分頁 -> 按Config Vars旁邊的Reveal Config Vars,接著填入各項資訊,分別為email:MC的email、password:MC的密碼、ip:伺服器IP、port:伺服器Port(通常為25565)、version:MC的版本
    7. 完成後切換回Deploy拉到下面按Manual deploy旁邊的Deploy
    8. 應該過一段時間就會看到角色在線上了
