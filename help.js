
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
━━━ 𝘿𝙀𝙉𝙕 𝘽𝙊𝙏𝙕 ━━━

 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}

 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
 Library : Baileys-MD
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}
 Room Chat : ${romnya}
 Total Fitur : 600+

 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}menu
 ${no++} ➳ ${prefix}rules
 ${no++} ➳ ${prefix}owner
 ${no++} ➳ ${prefix}infobot
 ${no++} ➳ ${prefix}jadibot
 ${no++} ➳ ${prefix}listjadibot
 ${no++} ➳ ${prefix}groupbot
 ${no++} ➳ ${prefix}ownerinfo
 ${no++} ➳ ${prefix}infoowner

 𝙐𝙎𝙀𝙍 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}report
 ${no++} ➳ ${prefix}request
 ${no++} ➳ ${prefix}cekprem
 ${no++} ➳ ${prefix}daftarprem
 ${no++} ➳ ${prefix}changename

 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}room
 ${no++} ➳ ${prefix}error
 ${no++} ➳ ${prefix}clearerr
 ${no++} ➳ ${prefix}siaran
 ${no++} ➳ ${prefix}session
 ${no++} ➳ ${prefix}resetdb
 ${no++} ➳ ${prefix}runtime
 ${no++} ➳ ${prefix}setexif
 ${no++} ➳ ${prefix}setwm
 ${no++} ➳ ${prefix}setfooter
 ${no++} ➳ ${prefix}setppbot
 ${no++} ➳ ${prefix}addprem
 ${no++} ➳ ${prefix}delprem
 ${no++} ➳ ${prefix}bc
 ${no++} ➳ ${prefix}bctext
 ${no++} ➳ ${prefix}bcvideo
 ${no++} ➳ ${prefix}bcaudio
 ${no++} ➳ ${prefix}bcimage
 ${no++} ➳ ${prefix}broadcast

 𝙆𝘼𝙇𝙆𝙐𝙇𝘼𝙏𝙊𝙍 𝙈𝙀𝙉𝙐
 ${no++} ➳ ${prefix}kali 
 ${no++} ➳ ${prefix}bagi 
 ${no++} ➳ ${prefix}kurang 
 ${no++} ➳ ${prefix}tambah 

 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}fitnah
 ${no++} ➳ ${prefix}delete
 ${no++} ➳ ${prefix}revoke
 ${no++} ➳ ${prefix}tagall
 ${no++} ➳ ${prefix}hidetag
 ${no++} ➳ ${prefix}setdesc
 ${no++} ➳ ${prefix}linkgrup
 ${no++} ➳ ${prefix}infogroup
 ${no++} ➳ ${prefix}setppgrup
 ${no++} ➳ ${prefix}setnamegrup
 ${no++} ➳ ${prefix}group open
 ${no++} ➳ ${prefix}group close
 ${no++} ➳ ${prefix}antilink on
 ${no++} ➳ ${prefix}antilink off
 ${no++} ➳ ${prefix}welcome on
 ${no++} ➳ ${prefix}welcome off
 ${no++} ➳ ${prefix}tiktokauto on
 ${no++} ➳ ${prefix}tiktokauto off
 ${no++} ➳ ${prefix}kick @tag
 ${no++} ➳ ${prefix}demote @tag
 ${no++} ➳ ${prefix}promote @tag
 
 𝘼𝙐𝙏𝙊𝘿𝙀𝘾𝙏 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}sadcat
 ${no++} ➳ ${prefix}stalkff
 ${no++} ➳ ${prefix}stalknpm
 ${no++} ➳ ${prefix}stalkgithub

 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐
 ${no++} ➳ ${prefix}tiktok
 ${no++} ➳ ${prefix}ytmp3
 ${no++} ➳ ${prefix}ytmp4
 ${no++} ➳ ${prefix}pinterest
 ${no++} ➳ ${prefix}playmp3
 ${no++} ➳ ${prefix}playmp4
 ${no++} ➳ ${prefix}gitclone
 ${no++} ➳ ${prefix}mediafire
 ${no++} ➳ ${prefix}wikimedia
 ${no++} ➳ ${prefix}soundcloud

 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}tts
 ${no++} ➳ ${prefix}tourl
 ${no++} ➳ ${prefix}toimg
 ${no++} ➳ ${prefix}tomp3
 ${no++} ➳ ${prefix}tomp4
 ${no++} ➳ ${prefix}emojimix
 ${no++} ➳ ${prefix}sticker
 ${no++} ➳ ${prefix}stickergif
 ${no++} ➳ ${prefix}stickerwm
 ${no++} ➳ ${prefix}stickermeme

 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}spamcall
 ${no++} ➳ ${prefix}translate
 ${no++} ➳ ${prefix}ssweb-pc
 ${no++} ➳ ${prefix}ssweb-hp
 ${no++} ➳ ${prefix}bitly_short
 ${no++} ➳ ${prefix}cuttly_short
 ${no++} ➳ ${prefix}tinyurl_short
 ${no++} ➳ ${prefix}base32
 ${no++} ➳ ${prefix}base64
 ${no++} ➳ ${prefix}debase32
 ${no++} ➳ ${prefix}debase64
 ${no++} ➳ ${prefix}latintoaksara
 ${no++} ➳ ${prefix}aksaratolatin
 ${no++} ➳ ${prefix}balikhuruf
 ${no++} ➳ ${prefix}balikangka
 ${no++} ➳ ${prefix}besarkecil
 ${no++} ➳ ${prefix}bilangangka

 𝘽𝙐𝙂𝙑𝙄𝙋 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}sendbug 628xxx
 ${no++} ➳ ${prefix}philips 628xxx
 ${no++} ➳ ${prefix}philips2 628xxx
 ${no++} ➳ ${prefix}philips3 628xxx
 ${no++} ➳ ${prefix}santet @tag
 ${no++} ➳ ${prefix}santet2 @tag
 ${no++} ➳ ${prefix}santet3 @tag
 ${no++} ➳ ${prefix}virtex 628xxx
 ${no++} ➳ ${prefix}virtex2 628xxx
 ${no++} ➳ ${prefix}virtex3 628xxx
 ${no++} ➳ ${prefix}bug1 628xxx
 ${no++} ➳ ${prefix}bug2 628xxx
 ${no++} ➳ ${prefix}bug3 628xxx
 ${no++} ➳ ${prefix}bug4 628xxx
 ${no++} ➳ ${prefix}bug5 628xxx
 
 𝙎𝙀𝙍𝙏𝙄𝙁𝙄𝙆𝘼𝙏 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}toloserti <nama>
 ${no++} ➳ ${prefix}badgirlserti <nama>
 ${no++} ➳ ${prefix}goodgirlserti <nama>
 ${no++} ➳ ${prefix}fuckgirlserti <nama>
 ${no++} ➳ ${prefix}bucinserti <nama>
 
 𝙇𝙊𝙂𝙊 𝙈𝘼𝙆𝙀𝙍 
 ${no++} ➳ ${prefix}digital
 ${no++} ➳ ${prefix}quoteser
 ${no++} ➳ ${prefix}quobucin
 ${no++} ➳ ${prefix}rem
 ${no++} ➳ ${prefix}girlneko
 ${no++} ➳ ${prefix}sadboy
 ${no++} ➳ ${prefix}kaneki
 ${no++} ➳ ${prefix}lolimaker

 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}buatroom 628xxx
 ${no++} ➳ ${prefix}menfess 628xx|bot|hai
 
 𝙑𝙊𝙆𝘼𝙇 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}hilih <text>
 ${no++} ➳ ${prefix}halah <text>
 ${no++} ➳ ${prefix}huluh <text>
 ${no++} ➳ ${prefix}heleh <text>
 ${no++} ➳ ${prefix}holoh <text>
 
 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}cecan
 ${no++} ➳ ${prefix}cogan
 ${no++} ➳ ${prefix}mobil
 ${no++} ➳ ${prefix}islamic
 ${no++} ➳ ${prefix}darkjokes
 ${no++} ➳ ${prefix}boneka
 ${no++} ➳ ${prefix}wallhp
 ${no++} ➳ ${prefix}tatasurya
 ${no++} ➳ ${prefix}programing

 𝙋𝙍𝙄𝙈𝘽𝙊𝙉 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}ramaljodoh
 ${no++} ➳ ${prefix}ramalanjodoh
 ${no++} ➳ ${prefix}nomorhoki
 ${no++} ➳ ${prefix}artimimpi
 ${no++} ➳ ${prefix}artinama
 ${no++} ➳ ${prefix}sifatusaha
 ${no++} ➳ ${prefix}tafsirmimpi
 ${no++} ➳ ${prefix}pasangan
 ${no++} ➳ ${prefix}suamiistri
 ${no++} ➳ ${prefix}ramalcinta
 ${no++} ➳ ${prefix}ramalancinta
 ${no++} ➳ ${prefix}ramaljodohbali
 ${no++} ➳ ${prefix}ramalanjodohbali
 ${no++} ➳ ${prefix}cocoknama
 ${no++} ➳ ${prefix}kecocokannama
 ${no++} ➳ ${prefix}cocokpasangan
 ${no++} ➳ ${prefix}kecocokanpasangan

 𝘼𝙎𝙐𝙋𝘼𝙉 𝙂𝘼𝘾𝙃𝘼 
 ${no++} ➳ ${prefix}rika
 ${no++} ➳ ${prefix}bocil
 ${no++} ➳ ${prefix}ukhty
 ${no++} ➳ ${prefix}santuy
 ${no++} ➳ ${prefix}hijaber

 𝘼𝙐𝘿𝙄𝙊 𝘾𝙃𝘼𝙉𝙂𝙀𝙍 
 ${no++} ➳ ${prefix}fat
 ${no++} ➳ ${prefix}fast
 ${no++} ➳ ${prefix}slow
 ${no++} ➳ ${prefix}bass
 ${no++} ➳ ${prefix}deep
 ${no++} ➳ ${prefix}tupai
 ${no++} ➳ ${prefix}robot
 ${no++} ➳ ${prefix}blown
 ${no++} ➳ ${prefix}smooth
 ${no++} ➳ ${prefix}earrape
 ${no++} ➳ ${prefix}reverse
 ${no++} ➳ ${prefix}nightcore

 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝙈𝙀𝙉𝙐
 ${no++} ➳ ${prefix}infogempa
 ${no++} ➳ ${prefix}gempa
 ${no++} ➳ ${prefix}jadwaltv
 ${no++} ➳ ${prefix}gempanow
 ${no++} ➳ ${prefix}bioskopnow
 
 𝙍𝘼𝙉𝘿𝙊𝙈 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 
 ${no++} ➳ ${prefix}dadu
 ${no++} ➳ ${prefix}anjing
 ${no++} ➳ ${prefix}patrick
 ${no++} ➳ ${prefix}bucinstick
 ${no++} ➳ ${prefix}gawrgura
 ${no++} ➳ ${prefix}amongus

 𝙒𝘼𝙇𝙇𝙋𝘼𝙋𝙀𝙍 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}milf
 ${no++} ➳ ${prefix}loli
 ${no++} ➳ ${prefix}wallml
 ${no++} ➳ ${prefix}waifu
 ${no++} ➳ ${prefix}husbu
 ${no++} ➳ ${prefix}cosplay
 ${no++} ➳ ${prefix}ppcouple
 ${no++} ➳ ${prefix}wallpaperislami
 ${no++} ➳ ${prefix}wallpaperinori
 ${no++} ➳ ${prefix}wallpaperanime
 ${no++} ➳ ${prefix}wallpapergamer
 ${no++} ➳ ${prefix}wallpapermeme
 ${no++} ➳ ${prefix}wallpaperprogamer
 ${no++} ➳ ${prefix}wallpaperteknologi
 ${no++} ➳ ${prefix}wallpapercyber

 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}cry
 ${no++} ➳ ${prefix}hug
 ${no++} ➳ ${prefix}pat
 ${no++} ➳ ${prefix}bully
 ${no++} ➳ ${prefix}lick
 ${no++} ➳ ${prefix}kiss
 ${no++} ➳ ${prefix}awoo
 ${no++} ➳ ${prefix}waifu
 ${no++} ➳ ${prefix}shinobu
 ${no++} ➳ ${prefix}cuddle
 ${no++} ➳ ${prefix}megumin
 ${no++} ➳ ${prefix}slap
 ${no++} ➳ ${prefix}neko
 ${no++} ➳ ${prefix}wink
 ${no++} ➳ ${prefix}dance
 ${no++} ➳ ${prefix}poke
 ${no++} ➳ ${prefix}glomp
 ${no++} ➳ ${prefix}bite
 ${no++} ➳ ${prefix}nom
 ${no++} ➳ ${prefix}handhold
 ${no++} ➳ ${prefix}highfive
 ${no++} ➳ ${prefix}wave
 ${no++} ➳ ${prefix}smug
 ${no++} ➳ ${prefix}smile
 ${no++} ➳ ${prefix}bonk

 𝘾𝙀𝙍𝙋𝙀𝙉 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}cerpen-sejarah
 ${no++} ➳ ${prefix}cerpen-sedih
 ${no++} ➳ ${prefix}cerpen-sastra
 ${no++} ➳ ${prefix}cerpen-romantis
 ${no++} ➳ ${prefix}cerpen-rohani
 ${no++} ➳ ${prefix}cerpen-rindu
 ${no++} ➳ ${prefix}cerpen-remaja
 ${no++} ➳ ${prefix}cerpen-ramadhan
 ${no++} ➳ ${prefix}cerpen-petualangan
 ${no++} ➳ ${prefix}cerpen-persahabatan
 ${no++} ➳ ${prefix}cerpen-perpisahan
 ${no++} ➳ ${prefix}cerpen-perjuangan
 ${no++} ➳ ${prefix}cerpen-penyesalan
 ${no++} ➳ ${prefix}cerpen-pengorbanan
 ${no++} ➳ ${prefix}cerpen-pengalaman
 ${no++} ➳ ${prefix}cerpen-pendidikan
 ${no++} ➳ ${prefix}cerpen-penantian
 ${no++} ➳ ${prefix}cerpen-patahhati
 ${no++} ➳ ${prefix}cerpen-olahraga
 ${no++} ➳ ${prefix}cerpen-nasionalisme
 ${no++} ➳ ${prefix}cerpen-nasihat
 ${no++} ➳ ${prefix}cerpen-motivasi
 ${no++} ➳ ${prefix}cerpen-misteri
 ${no++} ➳ ${prefix}cerpen-mengharukan
 ${no++} ➳ ${prefix}cerpen-malaysia
 ${no++} ➳ ${prefix}cerpen-liburan
 ${no++} ➳ ${prefix}cerpen-kristen
 ${no++} ➳ ${prefix}cerpen-korea
 ${no++} ➳ ${prefix}cerpen-kisahnyata
 ${no++} ➳ ${prefix}cerpen-keluarga
 ${no++} ➳ ${prefix}cerpen-kehidupan
 ${no++} ➳ ${prefix}cerpen-jepang
 ${no++} ➳ ${prefix}cerpen-inspiratif
 ${no++} ➳ ${prefix}cerpen-gokil
 ${no++} ➳ ${prefix}cerpen-galau
 ${no++} ➳ ${prefix}cerpen-cintasejati
 ${no++} ➳ ${prefix}cerpen-cintasegitiga
 ${no++} ➳ ${prefix}cerpen-cintasedih
 ${no++} ➳ ${prefix}cerpen-cintaromantis
 ${no++} ➳ ${prefix}cerpen-cintapertama
 ${no++} ➳ ${prefix}cerpen-cintaislami
 ${no++} ➳ ${prefix}cerpen-cinta
 ${no++} ➳ ${prefix}cerpen-budaya
 ${no++} ➳ ${prefix}cerpen-bahasasunda
 ${no++} ➳ ${prefix}cerpen-bahasajawa
 ${no++} ➳ ${prefix}cerpen-bahasainggris
 ${no++} ➳ ${prefix}cerpen-bahasadaerah
 ${no++} ➳ ${prefix}cerpen-anak

 𝙉𝙎𝙁𝙒 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}yuri
 ${no++} ➳ ${prefix}ero
 ${no++} ➳ ${prefix}foot
 ${no++} ➳ ${prefix}ass
 ${no++} ➳ ${prefix}cuckold
 ${no++} ➳ ${prefix}cum
 ${no++} ➳ ${prefix}hentai
 ${no++} ➳ ${prefix}gangbang
 ${no++} ➳ ${prefix}femdom
 ${no++} ➳ ${prefix}ahegao
 ${no++} ➳ ${prefix}glasses
 ${no++} ➳ ${prefix}jahy
 ${no++} ➳ ${prefix}orgy
 ${no++} ➳ ${prefix}pussy
 ${no++} ➳ ${prefix}thighs
 ${no++} ➳ ${prefix}panties
 ${no++} ➳ ${prefix}thighs
 ${no++} ➳ ${prefix}masturbation
 ${no++} ➳ ${prefix}chiisaihentai
 ${no++} ➳ ${prefix}trap
 ${no++} ➳ ${prefix}blowjob
 ${no++} ➳ ${prefix}yaoi
 ${no++} ➳ ${prefix}ecchi
 ${no++} ➳ ${prefix}hentai
 ${no++} ➳ ${prefix}ahegao
 ${no++} ➳ ${prefix}hololewd
 ${no++} ➳ ${prefix}sideoppai
 ${no++} ➳ ${prefix}animefeets
 ${no++} ➳ ${prefix}animebooty
 ${no++} ➳ ${prefix}animethighss
 ${no++} ➳ ${prefix}hentaiparadise
 ${no++} ➳ ${prefix}animearmpits
 ${no++} ➳ ${prefix}hentaifemdom
 ${no++} ➳ ${prefix}lewdanimegirls
 ${no++} ➳ ${prefix}biganimetiddies
 ${no++} ➳ ${prefix}animebellybutton
 ${no++} ➳ ${prefix}hentai4everyone

 𝙏𝙀𝙓𝙏𝙋𝙍𝙊 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}metallic text
 ${no++} ➳ ${prefix}naruto text
 ${no++} ➳ ${prefix}butterfly text
 ${no++} ➳ ${prefix}flaming text
 ${no++} ➳ ${prefix}shadow text
 ${no++} ➳ ${prefix}cup text
 ${no++} ➳ ${prefix}cup1 text
 ${no++} ➳ ${prefix}romance text
 ${no++} ➳ ${prefix}smoke text
 ${no++} ➳ ${prefix}burnpaper text
 ${no++} ➳ ${prefix}lovemessage text
 ${no++} ➳ ${prefix}undergrass text
 ${no++} ➳ ${prefix}love text
 ${no++} ➳ ${prefix}coffe text
 ${no++} ➳ ${prefix}woodheart text
 ${no++} ➳ ${prefix}woodenboard text
 ${no++} ➳ ${prefix}summer3d text
 ${no++} ➳ ${prefix}wolfmetal text
 ${no++} ➳ ${prefix}nature3d text
 ${no++} ➳ ${prefix}underwater text
 ${no++} ➳ ${prefix}goldenrose text
 ${no++} ➳ ${prefix}summernature text
 ${no++} ➳ ${prefix}letterleaves text
 ${no++} ➳ ${prefix}glowingneon text
 ${no++} ➳ ${prefix}fallleaves text
 ${no++} ➳ ${prefix}flamming text
 ${no++} ➳ ${prefix}harrypotter text
 ${no++} ➳ ${prefix}carvedwood text
 ${no++} ➳ ${prefix}tiktok text1 text2
 ${no++} ➳ ${prefix}arcade8bit text1 text2
 ${no++} ➳ ${prefix}battlefield4 text1 text2
 ${no++} ➳ ${prefix}pubg text1 text2

 𝙀𝙋𝙃𝙊𝙏𝙊 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}wetglass text
 ${no++} ➳ ${prefix}multicolor3d text
 ${no++} ➳ ${prefix}watercolor text
 ${no++} ➳ ${prefix}luxurygold text
 ${no++} ➳ ${prefix}galaxywallpaper text
 ${no++} ➳ ${prefix}lighttext text
 ${no++} ➳ ${prefix}beautifulflower text
 ${no++} ➳ ${prefix}puppycute text
 ${no++} ➳ ${prefix}royaltext text
 ${no++} ➳ ${prefix}heartshaped text
 ${no++} ➳ ${prefix}birthdaycake text
 ${no++} ➳ ${prefix}galaxystyle text
 ${no++} ➳ ${prefix}hologram3d text
 ${no++} ➳ ${prefix}greenneon text
 ${no++} ➳ ${prefix}glossychrome text
 ${no++} ➳ ${prefix}greenbush text
 ${no++} ➳ ${prefix}metallogo text
 ${no++} ➳ ${prefix}noeltext text
 ${no++} ➳ ${prefix}glittergold text
 ${no++} ➳ ${prefix}textcake text
 ${no++} ➳ ${prefix}starsnight text
 ${no++} ➳ ${prefix}wooden3d text
 ${no++} ➳ ${prefix}textbyname text
 ${no++} ➳ ${prefix}writegalacy text
 ${no++} ➳ ${prefix}galaxybat text
 ${no++} ➳ ${prefix}snow3d text
 ${no++} ➳ ${prefix}birthdayday text
 ${no++} ➳ ${prefix}goldplaybutton text
 ${no++} ➳ ${prefix}silverplaybutton text
 ${no++} ➳ ${prefix}freefire text

 𝙍𝘼𝙉𝘿𝙊𝙈 𝙄𝙈𝘼𝙂𝙀 
 ${no++} ➳ ${prefix}bj
 ${no++} ➳ ${prefix}ero
 ${no++} ➳ ${prefix}ppcp
 ${no++} ➳ ${prefix}cum
 ${no++} ➳ ${prefix}feet
 ${no++} ➳ ${prefix}yuri
 ${no++} ➳ ${prefix}trap
 ${no++} ➳ ${prefix}lewd
 ${no++} ➳ ${prefix}feed
 ${no++} ➳ ${prefix}eron
 ${no++} ➳ ${prefix}solo
 ${no++} ➳ ${prefix}gasm
 ${no++} ➳ ${prefix}poke
 ${no++} ➳ ${prefix}anal
 ${no++} ➳ ${prefix}holo
 ${no++} ➳ ${prefix}tits
 ${no++} ➳ ${prefix}kuni
 ${no++} ➳ ${prefix}kiss
 ${no++} ➳ ${prefix}erok
 ${no++} ➳ ${prefix}smug
 ${no++} ➳ ${prefix}baka
 ${no++} ➳ ${prefix}solog
 ${no++} ➳ ${prefix}feetg
 ${no++} ➳ ${prefix}lewdk
 ${no++} ➳ ${prefix}waifu
 ${no++} ➳ ${prefix}pussy
 ${no++} ➳ ${prefix}femdom
 ${no++} ➳ ${prefix}cuddle
 ${no++} ➳ ${prefix}hentai
 ${no++} ➳ ${prefix}eroyuri
 ${no++} ➳ ${prefix}cum_jpg
 ${no++} ➳ ${prefix}blowjob
 ${no++} ➳ ${prefix}erofeet
 ${no++} ➳ ${prefix}holoero
 ${no++} ➳ ${prefix}classic
 ${no++} ➳ ${prefix}erokemo
 ${no++} ➳ ${prefix}fox_girl
 ${no++} ➳ ${prefix}futanari
 ${no++} ➳ ${prefix}lewdkemo
 ${no++} ➳ ${prefix}wallpaper
 ${no++} ➳ ${prefix}pussy_jpg
 ${no++} ➳ ${prefix}kemonomimi
 ${no++} ➳ ${prefix}nsfw_avatar
 `
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Dny
 • *Umur:* 16 tahun
 • *Hoby:* Turu/Game
 • *Konten:* Creator

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* 085604500380
 • *Youtube:* Denz Creator
 `
}