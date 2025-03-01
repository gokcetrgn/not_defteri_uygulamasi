# Not Tutma Uygulaması

Bu proje, Node.js ve Express.js kullanılarak geliştirilmiş basit bir not tutma uygulamasıdır. Kullanıcılar not ekleyebilir, düzenleyebilir ve silebilir. Veriler MySQL veritabanında saklanmaktadır.

## 📌 Özellikler
- **Not Ekleme:** Kullanıcılar yeni notlar ekleyebilir.
- **Not Güncelleme:** Mevcut notlar düzenlenebilir.
- **Not Silme:** Kullanıcılar istemedikleri notları silebilir.
- **MySQL Kullanımı:** Notların veritabanında saklanması.

## 🛠 Kullanılan Teknolojiler
- **Backend:** Node.js, Express.js
- **Veritabanı:** MySQL, MySQL2
- **Şablon Motoru:** EJS

## 🚀 Kurulum

1. **Projeyi Klonla:**
   ```bash
   git clone https://github.com/kullanici/not-tutma.git
   cd not-tutma
   ```

2. **Bağımlılıkları Yükle:**
   ```bash
   npm install
   ```

3. **MySQL Veritabanını Kur:**
   MySQL veritabanınızı oluşturun ve aşağıdaki SQL komutunu çalıştırın:
   ```sql
   CREATE DATABASE not_uygulamasi;
   USE not_uygulamasi;
   CREATE TABLE notes (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       content TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **.env Dosyasını Oluştur ve Aşağıdakileri Ekle:**
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=not_uygulamasi
   ```

5. **Uygulamayı Başlat:**
   ```bash
   npm start
   ```


## 💡 Katkıda Bulunma
Katkıda bulunmak için lütfen bir **pull request (PR)** gönderin veya bir **issue** açın.

## 📜 Lisans
Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için [LİSANS](LICENSE) dosyasına göz atabilirsiniz.

