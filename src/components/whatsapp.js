import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Whatsapp = () => {
	return (
		<WhatsAppWidget
			phoneNo="77003069000"
            position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt="Добрый день!"
			iconSize="45"
			iconColor="white"
			iconBgColor="#1200ba"
			headerIcon="https://aksessuary.kz/icon-whatsapp.png"
			headerIconColor="pink"
			headerTxtColor="white"
			headerBgColor="#1200ba"
			headerTitle="Менеджер"
			headerCaption="Online"
			bodyBgColor="white"
			chatPersonName="Поддержка"
			chatMessage={<>Здравствуйте 👋 <br /><br /> Чем я согу Вам помочь?</>}
			footerBgColor="#1200ba"
			placeholder="Type a message.."
			btnBgColor="green"
			btnTxt="Перейти в чат"
			btnTxtColor="white"
		/>
	);
};

export default Whatsapp;