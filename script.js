"use strict";

const SPECIMENS = [
  {id:"mallard",name:"Vịt trời",latin:"Anas platyrhynchos",category:"duck",image:"https://thurungrauque.com/mediacenter/media/images/products/1447/1433/s800_600/vit-troi-1489823693.jpg",traits:["Thường sống ở vùng nước ngọt và có khả năng bơi lội tốt.","Con trống thường có phần đầu xanh óng trong mùa sinh sản."],fun:"Vịt trời là tổ tiên của nhiều giống vịt nhà phổ biến.",use:"Thường được quan sát trong môi trường tự nhiên.",hint:"Loài vịt hoang dã thường gặp ở ao hồ."},
  {id:"co",name:"Vịt cỏ",latin:"Domestic duck",category:"duck",image:"https://giadinh.mediacdn.vn/296230595582509056/2022/12/21/vcvd3-1671625700377294414165.jpg",traits:["Thường có vóc dáng nhỏ gọn.","Được nuôi phổ biến ở nhiều vùng nông thôn Việt Nam."],fun:"Tên gọi vịt cỏ thường dùng cho các giống vịt địa phương.",use:"Được nuôi lấy thịt và trứng.",hint:"Giống vịt địa phương quen thuộc."},
  {id:"bau",name:"Vịt bầu",latin:"Domestic duck",category:"duck",image:"https://nguoichannuoi.vn/upload_images/images/khoa-hoc-ky-thuat-chan-nuoi/vit-bau.jpg",traits:["Thường có thân hình tương đối tròn.","Là tên gọi quen thuộc của một nhóm vịt nhà."],fun:"Đặc điểm có thể thay đổi theo địa phương và giống.",use:"Được nuôi lấy thịt và trứng.",hint:"Tên gọi một giống vịt nhà."},
  {id:"muscovy",name:"Vịt xiêm",latin:"Cairina moschata",category:"duck",image:"https://goovetvn.com/images/vit-xiem-1.jpg",traits:["Có phần da đỏ quanh mặt khá dễ nhận biết.","Thường có thân hình chắc khỏe."],fun:"Vịt xiêm có nguồn gốc từ châu Mỹ.",use:"Được nuôi lấy thịt.",hint:"Loài vịt có vùng da đỏ quanh mặt."},
  {id:"runner",name:"Vịt chạy Ấn Độ",latin:"Indian Runner duck",category:"duck",image:"https://globalvet.com.vn/wp-content/uploads/2024/11/vit-chay-an-do.jpg",traits:["Có dáng đứng thẳng đặc trưng.","Thường di chuyển nhanh trên mặt đất."],fun:"Dáng đứng khiến chúng khác nhiều giống vịt khác.",use:"Được nuôi lấy trứng và làm cảnh.",hint:"Giống vịt có dáng đứng thẳng."},
  {id:"pekin",name:"Vịt Bắc Kinh",latin:"Anas platyrhynchos domesticus",category:"duck",image:"https://upload.wikimedia.org/wikipedia/commons/8/85/White_duck_in_Utah_%2842425216301%29.jpg?utm_source=vi.wikipedia.org&utm_campaign=index&utm_content=original",traits:["Thường có bộ lông trắng và mỏ màu cam.","Là giống vịt nhà phổ biến."],fun:"Vịt Bắc Kinh được nuôi ở nhiều quốc gia.",use:"Được nuôi lấy thịt.",hint:"Giống vịt nhà thường có lông trắng."},
  {id:"black-duck",name:"Vịt đen",latin:"Black domestic duck",category:"duck",image:"https://gionggiacam.net/wp-content/uploads/2019/03/Ngan-den.jpg",traits:["Bộ lông có màu sẫm.","Màu sắc và vóc dáng tùy giống."],fun:"Tên gọi này có thể chỉ nhiều dòng vịt lông đen.",use:"Tùy giống và mục đích chăn nuôi.",hint:"Vịt có bộ lông sẫm màu."},
  {id:"ngan",name:"Ngan",latin:"Cairina moschata",category:"meat",image:"https://clv.vn/wp-content/uploads/2020/02/ky-thuat-nuoi-ngan-phap-3.jpg",traits:["Thịt có vị đậm, thường chế biến thành món rang, om hoặc luộc.","Là gia cầm quen thuộc trong bữa ăn Việt."],fun:"Ngan và vịt là những tên gọi khác nhau trong ẩm thực.",use:"Ngan luộc, ngan cháy tỏi, bún ngan.",hint:"Gia cầm thường xuất hiện trong món ngan cháy tỏi."},
  {id:"ga",name:"Gà",latin:"Gallus gallus domesticus",category:"meat",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuy4eTgsA0c2nygyQd0wLiWu4wvvXStiCAmoWAfFsj2LX9XjdcRaIxfAd&s=10",traits:["Là nguyên liệu phổ biến, có thể chế biến bằng nhiều cách.","Các phần thịt có kết cấu khác nhau."],fun:"Ức gà thường nạc hơn phần đùi.",use:"Gà luộc, gà nướng, gà rang.",hint:"Nguyên liệu của món gà nướng."},
  {id:"bo",name:"Bò",latin:"Bos taurus",category:"meat",image:"https://i.pinimg.com/736x/de/80/42/de8042288b12e0cd9a7c388981bff696.jpg",traits:["Có màu đỏ từ đỏ tươi đến đỏ sẫm.","Độ mềm phụ thuộc phần thịt và cách chế biến."],fun:"Các phần thịt bò phù hợp với cách nấu khác nhau.",use:"Bò lúc lắc, phở bò, bò xào.",hint:"Nguyên liệu chính của món bò lúc lắc."},
  {id:"lon",name:"Lợn",latin:"Sus scrofa domesticus",category:"meat",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBCTDwjUH0hSUfpnwxZD1rFbA5WnqZCIipurKxZ30b3dySporrEz3JjQt&s=10",traits:["Được dùng trong nhiều món ăn Việt Nam.","Có các phần nạc, mỡ và ba chỉ."],fun:"Ba chỉ có phần nạc và mỡ xen kẽ.",use:"Thịt kho, thịt luộc, thịt rang.",hint:"Nguyên liệu thường dùng để kho."},
  {id:"scallion",name:"Hành lá",latin:"Allium fistulosum",category:"onion",image:"https://images2.thanhnien.vn/528068263637045248/2023/3/11/hanh-la-1678508880324747720252.jpg",traits:["Có lá dài màu xanh và phần gốc trắng.","Thường được thái nhỏ để trang trí hoặc nấu cùng món ăn."],fun:"Hành lá thường được thêm gần cuối quá trình nấu.",use:"Canh, cháo, món xào và món nước.",hint:"Loại hành có lá dài màu xanh."},
  {id:"onion",name:"Hành tây",latin:"Allium cepa",category:"onion",image:"https://thanhnien.mediacdn.vn/Uploaded/phuchau/2022_05_04/hanhtay-wahf-2860.jpg",traits:["Có củ tròn với nhiều lớp.","Khi nấu chín thường trở nên mềm và ngọt hơn."],fun:"Cắt hành có thể làm mắt cay do hợp chất bay hơi.",use:"Xào, nướng, salad và nước sốt.",hint:"Củ hành có nhiều lớp."},
  {id:"shallot",name:"Hành tím",latin:"Allium cepa Aggregatum Group",category:"onion",image:"https://www.vinmec.com/static/uploads/20210606_012933_045889_cu_hanh_tim_co_tac_max_1800x1800_jpg_78b16bf6c4.jpg",traits:["Củ nhỏ, thường có vỏ tím đỏ.","Được dùng nhiều để phi thơm và làm gia vị."],fun:"Hành tím có hương vị thơm đặc trưng.",use:"Ướp thịt, làm hành phi, nấu canh.",hint:"Loại hành củ nhỏ thường dùng để phi."},
  {id:"dried-onion",name:"Hành khô",latin:"Dried onion",category:"onion",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAklRUSdGK90sA8MIcXiBycFDLr9bS6SrWQiwOCr7mYti5luAOuMwoS_E&s=10",traits:["Được bảo quản khô để dùng dần.","Thường dùng làm nền hương vị cho món ăn."],fun:"Bảo quản nơi khô thoáng giúp hạn chế ẩm mốc.",use:"Phi thơm, ướp và nấu món mặn.",hint:"Hành được bảo quản ở dạng khô."},
  {id:"garlic",name:"Tỏi",latin:"Allium sativum",category:"onion",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0iiOviLWoOl2yd8DuoBqp_Mck1EiYmnyIvfOF5VNt_Rtv9vxyWvrrHY&s=10",traits:["Củ gồm nhiều tép nhỏ.","Có mùi thơm rõ khi đập dập hoặc băm."],fun:"Tỏi thường được dùng cùng hành trong nhiều món Việt.",use:"Tỏi phi, nước chấm, món xào.",hint:"Gia vị thường được phi cùng hành."},
  {id:"water-spinach",name:"Rau muống",latin:"Ipomoea aquatica",category:"veggie",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyn13mmx8eZ__XMmmlxdU4Dv6KipEF9596OddqYUc_2WKg9Dh4kTQubE&s=10",traits:["Thân rỗng và lá xanh hình mũi tên.","Thường được luộc hoặc xào."],fun:"Rau muống phát triển tốt trong môi trường ẩm.",use:"Rau muống luộc, rau muống xào tỏi.",hint:"Loại rau thường xào tỏi."},
  {id:"sweet-leaf",name:"Rau ngót",latin:"Sauropus androgynus",category:"veggie",image:"https://www.vinmec.com/static/uploads/20201125_143129_322415_ba_bau_khong_an_rau_max_1800x1800_jpg_9ddcb5b0d5.jpg",traits:["Lá nhỏ màu xanh đậm.","Thường được nấu canh."],fun:"Rau ngót thường được vò nhẹ trước khi nấu.",use:"Canh rau ngót với thịt.",hint:"Loại rau thường nấu canh."},
  {id:"malabar-spinach",name:"Mồng tơi",latin:"Basella alba",category:"veggie",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8URKNn9d_esjyaozQB3HM9fvhhyjeZ28vO3rTDbxUEh4vZ1zyzq6Dzl62&s=10",traits:["Lá dày, mềm và có bề mặt hơi mọng.","Khi nấu canh tạo độ sánh nhẹ."],fun:"Mồng tơi thường được trồng trong thời tiết nóng.",use:"Canh mồng tơi, nấu cùng mướp.",hint:"Loại rau có lá dày, nấu canh hơi sánh."},
  {id:"sau",name:"Quả sấu",latin:"Dracontomelon duperreanum",category:"veggie",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXZTlliQ7mNZC-Jvf3lX3RZpUupQ7efWZg9RqOQvh7gxO3um1365yMBU&s=10",traits:["Quả hình tròn, khi non có màu xanh.","Có vị chua, thường được dùng trong các món ăn Việt Nam."],fun:"Quả sấu là nguyên liệu quen thuộc trong ẩm thực miền Bắc Việt Nam.",use:"Canh chua, nước sấu ngâm, vịt om sấu.",hint:"Loại quả xanh có vị chua, thường dùng nấu canh."},
  {id:"choy-sum",name:"Cải ngọt",latin:"Brassica rapa var. parachinensis",category:"veggie",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLNkmmGYuBnSnSHLYvkm6ktnVfhAO2mvRqa-ijR9cpm4QO_q2y4CIuZ5M&s=10",traits:["Có thân xanh và cụm lá mềm.","Thường được xào hoặc nấu canh."],fun:"Cải ngọt thường được thu hoạch khi thân còn non.",use:"Cải ngọt xào tỏi, canh cải.",hint:"Loại cải thường xào tỏi."},
  {id:"bok-choy",name:"Cải thìa",latin:"Brassica rapa subsp. chinensis",category:"veggie",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6n42nh7ruRtQj5QNI5OEQSKRFwu9IDiWblt70HNsJ0gvO6ypotLq5-xV8&s=10",traits:["Có bẹ trắng hoặc xanh nhạt và lá xanh.","Có thể giữ độ giòn nếu không nấu quá lâu."],fun:"Cải thìa thường xuất hiện trong món xào và súp.",use:"Cải thìa xào, canh rau.",hint:"Loại cải có bẹ rõ và lá xanh."},
  {id:"mustard-greens",name:"Cải xanh",latin:"Brassica juncea",category:"veggie",image:"https://login.medlatec.vn//ImagePath/images/20230109/20230109_cai-xanh-1.jpg",traits:["Lá thường có vị hơi cay nhẹ.","Có thể dùng nấu canh hoặc muối chua."],fun:"Cải xanh hợp với nhiều món nóng.",use:"Canh cải, dưa cải muối.",hint:"Loại cải có thể dùng muối dưa."},
{id:"tomato",name:"Cà chua",latin:"Solanum lycopersicum",category:"veggie",image:"https://admin.vov.gov.vn/UploadFolder/KhoTin/Images/UploadFolder/VOVVN/Images/sites/default/files/styles/large/public/2025-09/ca_chua.jpg",traits:["Quả thường có màu đỏ khi chín.","Có vị chua nhẹ, đôi khi hơi ngọt."],fun:"Cà chua được sử dụng rộng rãi trong nhiều nền ẩm thực.",use:"Salad, sốt cà chua, canh chua, món xào.",hint:"Loại quả thường có màu đỏ khi chín."},
{id:"bamboo-shoot",name:"Măng",latin:"Bambusoideae",category:"veggie",image:"https://cdn.tgdd.vn/Files/2018/08/18/1110736/cach-chon-va-luoc-mang-tuoi-khong-dang-khu-het-doc-nhanh-ngon-vo-cung-3.jpg",traits:["Măng non có màu trắng ngà hoặc vàng nhạt.","Có thể dùng tươi hoặc chế biến sau khi sơ chế phù hợp."],fun:"Măng là chồi non của cây tre, nứa hoặc một số loài tre khác.",use:"Canh măng, vịt om măng, măng xào.",hint:"Chồi non của cây tre, thường dùng nấu canh."},
  {id:"mui-tau",name:"Mùi tàu",latin:"Eryngium foetidum",category:"veggie",image:"https://media.vov.vn/sites/default/files/styles/large/public/2025-11/mui_tau.jpg",traits:["Lá dài, mép có răng cưa.","Có mùi thơm khá mạnh."],fun:"Mùi tàu còn được gọi là ngò gai ở một số vùng.",use:"Canh, phở, món trộn.",hint:"Rau thơm có lá dài và mép răng cưa."},
  {id:"rau-thom",name:"Rau thơm",latin:"Culinary herbs",category:"veggie",image:"https://trungtamthuocdantoc.com/wp-content/uploads/2019/11/rau-thom-4.jpg",traits:["Là tên gọi chung cho nhiều loại rau gia vị.","Thường được ăn kèm để tăng hương vị."],fun:"Mỗi loại rau thơm có mùi và cách dùng riêng.",use:"Bún, phở, món cuốn và salad.",hint:"Nhóm rau dùng để ăn kèm."},
  {id:"vietnamese-coriander",name:"Rau răm",latin:"Persicaria odorata",category:"veggie",image:"https://giadinh.mediacdn.vn/296230595582509056/2025/12/29/cong-dung-chua-benh-it-nguoi-biet-cua-rau-ram-1766992709030-1766992709839418526236.jpg",traits:["Lá thuôn dài và có mùi thơm riêng.","Thường được ăn kèm một số món Việt."],fun:"Rau răm thường xuất hiện trong món gỏi.",use:"Gỏi, món trộn, ăn kèm.",hint:"Loại rau thơm thường ăn cùng trứng vịt lộn."},
  {id:"chinese-cabbage",name:"Cải thảo",latin:"Brassica rapa subsp. pekinensis",category:"veggie",image:"https://product.hstatic.net/200000423303/product/cai-thao-huu-co_d5a332d40bf843e283c45aae5039351c_1024x1024.jpg",traits:["Lá xếp thành bắp dài, bẹ màu sáng.","Có vị dịu và chứa nhiều nước."],fun:"Cải thảo có thể dùng tươi, nấu hoặc muối.",use:"Canh, lẩu, kimchi.",hint:"Loại cải thường dùng làm kimchi."},
{id:"cauliflower",name:"Súp lơ",latin:"Brassica oleracea var. botrytis",category:"veggie",image:"https://giadinh.mediacdn.vn/296230595582509056/2022/12/28/rau-sup-lo-16722086832861423906513.jpg",traits:["Cụm hoa phát triển thành phần ăn được, thường có màu trắng hoặc xanh.","Có thể hấp, luộc, xào hoặc nấu canh."],fun:"Súp lơ thuộc họ cải và có nhiều giống khác nhau.",use:"Súp lơ luộc, súp lơ xào, súp lơ hấp.",hint:"Loại rau có phần bông thường màu trắng hoặc xanh."},
{id:"cabbage",name:"Bắp cải",latin:"Brassica oleracea var. capitata",category:"veggie",image:"https://media.vov.vn/sites/default/files/styles/large/public/2025-10/bap_cai.jpg",traits:["Lá cuộn chặt thành bắp.","Có thể ăn sống hoặc nấu chín."],fun:"Bắp cải có nhiều màu, phổ biến nhất là xanh và tím.",use:"Salad, luộc, xào, cuốn.",hint:"Loại rau có lá cuộn thành bắp."}
];

const CATEGORY_NAMES = {duck:"Vịt",meat:"Thịt",onion:"Hành",veggie:"Rau"};
const STORAGE_KEY = "natureDetective_fixed_v2";
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

let activeFilter = "all";
let searchTerm = "";
let visibleCount = 12;
let collectionTab = "discovered";
let saved = loadSaved();
let toastTimer;

function loadSaved() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      discovered: Array.isArray(data.discovered) ? data.discovered : [],
      favorites: Array.isArray(data.favorites) ? data.favorites : []
    };
  } catch {
    return {discovered:[],favorites:[]};
  }
}

function saveSaved() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch (error) {
    console.warn("Không thể lưu bộ sưu tập:", error);
  }
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  })[char]);
}

const fallbackImages = {
  duck:"https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?auto=format&fit=crop&w=700&q=80",
  meat:"https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=700&q=80",
  onion:"https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=700&q=80",
  veggie:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
};


function imageMarkup(item, className = "") {
  const imageName = item.image || "";
const src = /^https?:\/\//i.test(imageName)
    ? imageName
    : "https://commons.wikimedia.org/wiki/Special:FilePath/" +
      encodeURIComponent(imageName) + "?width=900";

  const fallback = fallbackImages[item.category] || fallbackImages.veggie;

  return `
    <img
      class="${className}"
      src="${src}"
      alt="${escapeHTML(item.name)}"
      loading="lazy"
      onerror="this.onerror=null; this.src='${fallback}'"
    >
  `;
}
function toast(message) {
  const element = $("#toast");
  if (!element) return;
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove("show"), 2300);
}

function favoriteButton(item) {
  const favorite = saved.favorites.includes(item.id);
  return `<button type="button" class="favorite-button ${favorite ? "is-favorite" : ""}" data-favorite="${item.id}" aria-label="${favorite ? "Bỏ yêu thích" : "Thêm yêu thích"}">${favorite ? "♥" : "♡"}</button>`;
}

function specimenCard(item) {
  const discovered = saved.discovered.includes(item.id);

  return `
    <article class="specimen-card">
      <div class="specimen-image-wrap">
        ${imageMarkup(item,"specimen-image")}
        <span class="specimen-tag">${escapeHTML(CATEGORY_NAMES[item.category].toUpperCase())}</span>
        ${favoriteButton(item)}
      </div>
      <div class="specimen-body">
        <span class="specimen-code">${discovered ? "✓ ĐÃ KHÁM PHÁ" : "HỒ SƠ NGUYÊN LIỆU"}</span>
        <h3>${escapeHTML(item.name)}</h3>
        <div class="specimen-scientific">${escapeHTML(item.latin)}</div>
        <p>${escapeHTML(item.traits[0])}</p>
        <div class="specimen-footer">
          <button type="button" data-details="${item.id}">XEM THÔNG TIN ↗</button>
          <span>${discovered ? "Đã khám phá" : "Chưa khám phá"}</span>
        </div>
      </div>
    </article>`;
}

function renderArchive() {
  const grid = $("#specimenGrid");
  if (!grid) return;

  const filtered = SPECIMENS.filter(item => {
    const categoryMatch = activeFilter === "all" || item.category === activeFilter;
    const text = `${item.name} ${item.latin} ${item.traits.join(" ")}`.toLowerCase();
    return categoryMatch && text.includes(searchTerm.toLowerCase());
  });

  const shown = filtered.slice(0, visibleCount);
  grid.innerHTML = shown.map(specimenCard).join("");

  if ($("#archiveCount")) $("#archiveCount").textContent = filtered.length;
  if ($("#totalSpecies")) $("#totalSpecies").textContent = SPECIMENS.length;
  if ($("#archiveEmpty")) $("#archiveEmpty").hidden = filtered.length > 0;
  if ($("#loadMore")) $("#loadMore").classList.toggle("hidden", filtered.length <= visibleCount);

  $$("#filterPills button").forEach(button => {
    const active = button.dataset.filter === activeFilter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderDishes(filter = "all") {
  $$("#dishGrid .dish-card").forEach(card => {
    card.hidden = filter !== "all" && card.dataset.dishCategory !== filter;
  });

  $$("#dishFilters button").forEach(button => {
    button.classList.toggle("active", button.dataset.dishFilter === filter);
  });
}

function markDiscovered(id) {
  if (!saved.discovered.includes(id)) {
    saved.discovered.push(id);
    saveSaved();
    renderArchive();
    renderCollection();
    toast("Đã thêm vào bộ sưu tập!");
  }
}

function openDetails(id) {
  const item = SPECIMENS.find(entry => entry.id === id);
  if (!item) return;

  markDiscovered(id);

  const dialog = $("#detailDialog");
  const content = $("#detailContent");
  if (!dialog || !content) return;

  content.innerHTML = `
    <div class="detail-meta">${escapeHTML(CATEGORY_NAMES[item.category].toUpperCase())} · THÔNG TIN CHI TIẾT</div>
    ${imageMarkup(item,"detail-image")}
    <h2>${escapeHTML(item.name)}</h2>
    <p><em>${escapeHTML(item.latin)}</em></p>
    <p>${escapeHTML(item.traits.join(" "))}</p>
    <h3>Bạn có biết?</h3>
    <p>${escapeHTML(item.fun)}</p>
    <h3>Gợi ý sử dụng</h3>
    <p>${escapeHTML(item.use)}</p>
    <p><strong>Gợi ý nhận diện:</strong> ${escapeHTML(item.hint)}</p>`;

  if (typeof dialog.showModal === "function") dialog.showModal();
}

function toggleFavorite(id) {
  if (saved.favorites.includes(id)) {
    saved.favorites = saved.favorites.filter(value => value !== id);
    toast("Đã bỏ khỏi mục yêu thích.");
  } else {
    saved.favorites.push(id);
    toast("Đã lưu vào mục yêu thích!");
  }

  saveSaved();
  renderArchive();
  renderCollection();
  updateSavedCount();
}

function updateSavedCount() {
  const count = $("#savedCount");
  if (count) count.textContent = saved.favorites.length;
}

function renderCompareOptions() {
  ["#compareA","#compareB"].forEach(selector => {
    const select = $(selector);
    if (!select) return;

    const previous = select.value;
    select.innerHTML = '<option value="">Chọn đối tượng</option>' +
      SPECIMENS.map(item =>
        `<option value="${item.id}">${escapeHTML(item.name)} — ${CATEGORY_NAMES[item.category]}</option>`
      ).join("");

    if (SPECIMENS.some(item => item.id === previous)) select.value = previous;
  });
}

function renderCompare() {
  const a = SPECIMENS.find(item => item.id === $("#compareA")?.value);
  const b = SPECIMENS.find(item => item.id === $("#compareB")?.value);
  const result = $("#compareResult");
  if (!result) return;

  if (!a || !b) {
    result.innerHTML = "";
    return;
  }

  if (a.id === b.id) {
    result.innerHTML = '<p class="empty-message">Hãy chọn hai nguyên liệu khác nhau.</p>';
    return;
  }

  result.innerHTML = `<div class="compare-columns">
    ${[a,b].map(item => `
      <article class="compare-item">
        ${imageMarkup(item,"compare-image")}
        <h3>${escapeHTML(item.name)}</h3>
        <p><em>${escapeHTML(item.latin)}</em></p>
        <p>${escapeHTML(item.traits.join(" "))}</p>
        <strong>Nhóm: ${CATEGORY_NAMES[item.category]}</strong>
      </article>`).join("")}
  </div>`;
}

function renderCollection() {
  const discovered = SPECIMENS.filter(item => saved.discovered.includes(item.id));
  const favorites = SPECIMENS.filter(item => saved.favorites.includes(item.id));

  if ($("#collectionTotal")) $("#collectionTotal").textContent = discovered.length;

  const percentage = Math.round(discovered.length / SPECIMENS.length * 100);
  if ($("#overallProgress")) $("#overallProgress").textContent = `${percentage}%`;
  if ($("#collectionProgress")) $("#collectionProgress").style.width = `${percentage}%`;

  ["duck","meat","onion","veggie"].forEach(category => {
    const items = SPECIMENS.filter(item => item.category === category);
    const count = items.filter(item => saved.discovered.includes(item.id)).length;
    const text = $(`#${category}ProgressText`);
    const bar = $(`#${category}ProgressBar`);
    if (text) text.textContent = `${count}/${items.length}`;
    if (bar) bar.style.width = `${count / items.length * 100}%`;
  });

  if ($("#discoveredTabCount")) $("#discoveredTabCount").textContent = discovered.length;
  if ($("#favoritesTabCount")) $("#favoritesTabCount").textContent = favorites.length;

  const list = collectionTab === "discovered" ? discovered : favorites;
  const grid = $("#collectionGrid");

  if (grid) {
    grid.innerHTML = list.map(item => `
      <article class="collection-item">
        <h3>${escapeHTML(item.name)}</h3>
        <p>${CATEGORY_NAMES[item.category]} · ${escapeHTML(item.latin)}</p>
        <p>${escapeHTML(item.traits[0])}</p>
        <button type="button" data-details="${item.id}">Xem thông tin ↗</button>
      </article>`).join("");
  }

  if ($("#collectionEmpty")) $("#collectionEmpty").hidden = list.length > 0;

  $$(".collection-tab").forEach(button => {
    button.classList.toggle("active", button.dataset.collectionTab === collectionTab);
  });

  const badges = $("#badgeGrid");
  if (badges) {
    const definitions = [
      {name:"Khám phá đầu tiên",icon:"🌱",ok:discovered.length >= 1},
      {name:"Nhà sưu tầm",icon:"🔎",ok:discovered.length >= 5},
      {name:"Nhà nghiên cứu",icon:"📗",ok:discovered.length >= 12},
      {name:"Chuyên gia thiên nhiên",icon:"🌿",ok:discovered.length >= SPECIMENS.length}
    ];

    badges.innerHTML = definitions.map(badge =>
      `<span class="badge ${badge.ok ? "unlocked" : ""}">${badge.icon} ${badge.name} ${badge.ok ? "✓" : "· Chưa mở khóa"}</span>`
    ).join("");
  }
}

function resetCollection() {
  if (!confirm("Bạn có chắc muốn xóa toàn bộ tiến trình khám phá và yêu thích không?")) return;

  saved = {discovered:[],favorites:[]};
  saveSaved();
  renderArchive();
  renderCollection();
  updateSavedCount();
  toast("Đã đặt lại bộ sưu tập.");
}

function initialize() {
  renderArchive();
  renderDishes();
  renderCompareOptions();
  renderCollection();
  updateSavedCount();

  $("#filterPills")?.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    activeFilter = button.dataset.filter;
    visibleCount = 12;
    renderArchive();
  });

  $("#searchInput")?.addEventListener("input", event => {
    searchTerm = event.target.value.trim();
    visibleCount = 12;
    renderArchive();
  });

  $("#loadMore")?.addEventListener("click", () => {
    visibleCount += 12;
    renderArchive();
  });

  $("#dishFilters")?.addEventListener("click", event => {
    const button = event.target.closest("[data-dish-filter]");
    if (button) renderDishes(button.dataset.dishFilter);
  });

  document.addEventListener("click", event => {
    const favorite = event.target.closest("[data-favorite]");
    if (favorite) {
      event.preventDefault();
      toggleFavorite(favorite.dataset.favorite);
      return;
    }

    const details = event.target.closest("[data-details]");
    if (details) {
      event.preventDefault();
      openDetails(details.dataset.details);
      return;
    }

    const category = event.target.closest(".category-card[data-category]");
    if (category) {
      activeFilter = category.dataset.category;
      visibleCount = 12;
      renderArchive();
      location.hash = "explore";
    }
  });

  $("#compareButton")?.addEventListener("click", renderCompare);
  $("#compareA")?.addEventListener("change", renderCompare);
  $("#compareB")?.addEventListener("change", renderCompare);

  $$(".collection-tab").forEach(button => {
    button.addEventListener("click", () => {
      collectionTab = button.dataset.collectionTab;
      renderCollection();
    });
  });

  $("#resetCollection")?.addEventListener("click", resetCollection);
  $("#closeDialog")?.addEventListener("click", () => $("#detailDialog")?.close());

  $("#detailDialog")?.addEventListener("click", event => {
    if (event.target === $("#detailDialog")) $("#detailDialog").close();
  });

  $("#menuToggle")?.addEventListener("click", () => {
    const nav = $("#mainNav");
    const open = nav.classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(open));
  });

  $$(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      $("#mainNav")?.classList.remove("open");
      $("#menuToggle")?.setAttribute("aria-expanded","false");
      $$(".main-nav a").forEach(a => a.classList.toggle("active", a === link));
    });
  });

  console.log("Nature Detective ready:", SPECIMENS.length, "nguyên liệu.");
}

document.addEventListener("DOMContentLoaded", initialize);

document.querySelectorAll("#dishGrid .dish-card").forEach(card => {
  card.addEventListener("click", () => {
    const image = card.querySelector("img");
    const name = card.querySelector("h3")?.textContent || "";
    const description = card.querySelector("p")?.textContent || "";

    const dialog = document.getElementById("detailDialog");
    const content = document.getElementById("detailContent");

    content.replaceChildren();

    const title = document.createElement("h2");
    title.textContent = name;

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    content.append(title);

    if (image) {
      const largeImage = document.createElement("img");
      largeImage.src = image.src;
      largeImage.alt = image.alt;
     largeImage.className = "detail-food-image";
      content.append(largeImage);
    }

    content.append(paragraph);

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  });
});

document.getElementById("closeDialog")?.addEventListener("click", () => {
  document.getElementById("detailDialog")?.close();
});

// CERTIFICATE — ĐẠI SỨ VỊT HÀNH
document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("certificateName");
  const claimButton = document.getElementById("claimCertificate");
  const downloadButton = document.getElementById("downloadCertificate");
  const dateElement = document.getElementById("certificateDate");
  const statusElement = document.getElementById("certificateStatus");
  const certificate = document.querySelector(".certificate-inner");

  if (
    !nameInput ||
    !claimButton ||
    !downloadButton ||
    !dateElement ||
    !statusElement ||
    !certificate
  ) return;

  let unlocked = false;

  function checkProgress() {
  const total = SPECIMENS.length;
  const discoveredIds = new Set(saved.discovered);
  const count = SPECIMENS.filter(item =>
    discoveredIds.has(item.id)
  ).length;

  const complete = true;

  claimButton.disabled = false;

  if (!complete) {
    statusElement.textContent =
      `Bạn đã khám phá ${count}/${total} nguyên liệu. Còn ${total - count} nguyên liệu nữa để mở khóa chứng chỉ.`;
  } else {
    statusElement.textContent =
      "Bạn đã hoàn thành bộ sưu tập! Hãy nhập tên để nhận chứng chỉ.";
  }

  return complete;
}

  checkProgress();

  claimButton.addEventListener("click", () => {

    const name = nameInput.value.trim();

    if (!name) {
      statusElement.textContent = "Bạn hãy nhập tên trước nhé!";
      nameInput.focus();
      return;
    }

    dateElement.textContent =
      new Date().toLocaleDateString("vi-VN");

    statusElement.textContent =
      `Chúc mừng ${name}! Bạn đã trở thành Đại sứ toàn cầu Vịt Hành.`;

    unlocked = true;
    downloadButton.disabled = false;
  });

  downloadButton.addEventListener("click", async () => {
    if (!unlocked) {
      statusElement.textContent = "Hãy nhận chứng chỉ trước nhé!";
      return;
    }

    const name = nameInput.value.trim();

    if (!name) {
      statusElement.textContent = "Bạn hãy nhập tên trước nhé!";
      return;
    }

    if (typeof html2canvas === "undefined") {
      statusElement.textContent =
        "Không tìm thấy thư viện tạo ảnh. Hãy kiểm tra index.html!";
      return;
    }

    let certificateCopy;

    try {
      downloadButton.disabled = true;
      downloadButton.textContent = "ĐANG TẠO ẢNH...";
      statusElement.textContent = "Đang tạo ảnh chứng chỉ...";

      certificateCopy = certificate.cloneNode(true);

      // Hiển thị tên thành văn bản trên ảnh
      const copiedInput =
        certificateCopy.querySelector("#certificateName");

      if (copiedInput) {
        const nameDisplay = document.createElement("div");
        nameDisplay.textContent = name;
        nameDisplay.style.cssText = `
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 26px;
          text-align: center;
          margin: 15px auto 30px;
          color: #304238;
          overflow-wrap: anywhere;
        `;

        copiedInput.replaceWith(nameDisplay);
      }

      // Không đưa thông báo trạng thái vào ảnh
      certificateCopy
        .querySelector("#certificateStatus")
        ?.remove();

      // Đặt bản sao ngoài màn hình nhưng vẫn cho html2canvas đọc
      certificateCopy.style.position = "fixed";
      certificateCopy.style.left = "0";
      certificateCopy.style.top = "0";
      certificateCopy.style.transform = "translateX(-200vw)";
      certificateCopy.style.width =
        certificate.getBoundingClientRect().width + "px";
      certificateCopy.style.maxWidth = "none";
      certificateCopy.style.zIndex = "-1";

      document.body.appendChild(certificateCopy);

      // Đợi trình duyệt bố trí nội dung
      await new Promise(resolve =>
        requestAnimationFrame(() =>
          requestAnimationFrame(resolve)
        )
      );

      const canvas = await html2canvas(certificateCopy, {
        scale: 2,
        backgroundColor: "#fffdf5",
        useCORS: true,
        logging: false
      });

      const blob = await new Promise(resolve =>
        canvas.toBlob(resolve, "image/png")
      );

      if (!blob) {
        throw new Error("Không thể tạo ảnh PNG.");
      }

      const file = new File(
        [blob],
        "Chung-Chi-Dai-Su-Vit-Hanh.png",
        { type: "image/png" }
      );

      // iPhone: mở bảng chia sẻ để người dùng chọn lưu ảnh
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          files: [file],
          title: "Chứng chỉ Đại sứ Vịt Hành"
        });

        statusElement.textContent =
          "Hãy chọn Lưu hình ảnh trong bảng chia sẻ để lưu vào album.";
      } else {
        // Trình duyệt không hỗ trợ chia sẻ file
        const imageURL = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = imageURL;
        link.download = "Chung-Chi-Dai-Su-Vit-Hanh.png";
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();
        link.remove();

        statusElement.textContent =
          "Ảnh đã được tạo. Nếu chưa tải được trên iPhone, hãy mở ảnh rồi dùng Chia sẻ > Lưu hình ảnh.";

        setTimeout(() => URL.revokeObjectURL(imageURL), 60000);
      }
    } catch (error) {
      if (error.name === "AbortError") {
        statusElement.textContent =
          "Bạn đã đóng bảng chia sẻ. Chứng chỉ vẫn được giữ nguyên.";
      } else {
        console.error("Lỗi tạo ảnh chứng chỉ:", error);
        statusElement.textContent =
          "Tạo ảnh thất bại. Hãy thử mở website bằng Safari.";
      }
    } finally {
      certificateCopy?.remove();
      downloadButton.disabled = false;
      downloadButton.textContent = "TẢI CHỨNG CHỈ ↓";
    }
  });
});
