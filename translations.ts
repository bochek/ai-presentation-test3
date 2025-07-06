
import { Translations } from './types';

export const translations: Translations = {
  eng: {
    header: {
      title: 'AI Business Solutions',
      slide: 'Slide',
      of: 'of',
    },
    titleSlide: {
      title: 'Revolutionize Your Workflow with AI',
      subtitle: 'Unlock unparalleled efficiency, supercharge productivity, and drive growth for your business with our intelligent AI assistant.',
      button: 'Discover the Future',
    },
    problemSlide: {
      title: 'Are You Drowning in Busywork?',
      subtitle: 'In today\'s competitive landscape, manual tasks and information overload are the biggest barriers to growth. Teams spend too much time on repetitive work, not strategic initiatives.',
      problems: [
        { title: '45% of Daily Tasks', text: 'Can be automated, yet remain manual in most companies, leading to wasted hours.' },
        { title: 'Information Overload', text: 'Crucial data is lost in emails and documents, making decision-making slow and inefficient.' },
        { title: 'Customer Expectations', text: 'Modern customers demand instant, 24/7 support that\'s difficult to scale manually.' },
      ],
    },
    features: {
        title: 'What Our AI Can Do For You',
        subtitle: 'A unified platform to automate, analyze, and accelerate every facet of your business.',
        items: [
            { key: 'CustomerSupportIcon', title: 'Automated Customer Support', description: 'Instantly resolve customer queries 24/7 with an intelligent, conversational AI.' },
            { key: 'DataAnalysisIcon', title: 'Data Analysis & Insights', description: 'Turn complex data into clear, actionable insights to drive smarter business decisions.' },
            { key: 'ContentCreationIcon', title: 'Accelerated Content Creation', description: 'Generate high-quality marketing copy, emails, and reports in a fraction of the time.' },
            { key: 'AutomationIcon', title: 'Workflow Automation', description: 'Automate repetitive tasks, from scheduling meetings to data entry, freeing up your team.' },
        ]
    },
    dataSlide: {
        title: 'Unlock Actionable Insights',
        subtitle: 'Stop guessing. Our AI analyzes your data to show you where you can save time and resources, visualizing the impact of automation.',
        chartData: [
            { name: 'Manual Tasks', timeSpent: 45, aiAssisted: 10 },
            { name: 'Data Entry', timeSpent: 35, aiAssisted: 5 },
            { name: 'Reporting', timeSpent: 25, aiAssisted: 8 },
            { name: 'Support', timeSpent: 50, aiAssisted: 15 },
            { name: 'Scheduling', timeSpent: 15, aiAssisted: 2 },
        ],
        legend: { timeSpent: 'Time Spent (Hours/Week)', aiAssisted: 'AI-Assisted' }
    },
    benefitsSlide: {
        title: 'Experience Tangible Business Benefits',
        subtitle: 'Adopting our AI isn\'t just a tech upgrade; it\'s an investment in your company\'s future success.',
        items: [
            { key: 'ZapIcon', title: 'Increased Productivity', description: 'Automate workflows and free up your team to focus on high-value strategic work.' },
            { key: 'DataAnalysisIcon', title: 'Reduced Operational Costs', description: 'Lower expenses by automating support, data entry, and other resource-intensive tasks.' },
            { key: 'CustomerSupportIcon', title: 'Enhanced Customer Satisfaction', description: 'Provide instant, accurate, and 24/7 support to delight your customers and build loyalty.' },
            { key: 'BriefcaseIcon', title: 'Faster, Smarter Decisions', description: 'Leverage AI-powered insights to make data-driven decisions with confidence and speed.' },
        ]
    },
    useCasesSlide: {
        title: 'An AI Assistant for Every Department',
        subtitle: 'Our platform is versatile, providing specialized assistance across your entire organization.',
        items: [
            { key: 'TargetIcon', title: 'Marketing', description: 'Personalized campaigns, SEO content, and social media management.' },
            { key: 'BriefcaseIcon', title: 'Sales', description: 'Lead qualification, automated follow-ups, and CRM data entry.' },
            { key: 'ZapIcon', title: 'Operations', description: 'Inventory management, logistics optimization, and report generation.' },
            { key: 'UsersIcon', title: 'Human Resources', description: 'Resume screening, onboarding assistance, and policy questions.' },
        ]
    },
    foundersSlide: {
        title: 'Meet the Visionaries',
        subtitle: 'The minds behind our groundbreaking AI technology.',
        founders: [
            { name: 'Andrew Bochek', title: 'CTO, Founder', imageUrl: 'https://i.pravatar.cc/150?u=andrew' },
            { name: 'Sergey Klimov', title: 'CCO, Co-founder', imageUrl: 'https://i.pravatar.cc/150?u=sergey' },
        ]
    },
    integrationSlide: {
        title: 'Seamless Integration with Your Tools',
        subtitle: 'Our AI assistant connects to the software you already use, enhancing your existing workflows without disruption.',
    },
    testimonialSlide: {
        quote: 'Implementing this AI assistant was a game-changer. We cut down our response times by 90% and freed up our team to focus on innovation. It’s the best investment we’ve made this year.',
        author: 'Jane Doe, CEO of TechCorp',
        company: 'Innovators in SaaS',
    },
    ctaSlide: {
        title: 'Ready to Transform Your Business?',
        subtitle: 'Let\'s talk about how our AI assistant can be tailored to your specific needs. Schedule a free, no-obligation demo with our experts today.',
        button: 'Schedule Your Free Demo',
        contact: 'Or contact us at',
        contactLink: 'sales@aibusines.co',
    },
  },
  rus: {
    header: {
      title: 'AI Решения для Бизнеса',
      slide: 'Слайд',
      of: 'из',
    },
    titleSlide: {
      title: 'Революционизируйте ваш рабочий процесс с AI',
      subtitle: 'Откройте беспрецедентную эффективность, увеличьте производительность и стимулируйте рост вашего бизнеса с нашим интеллектуальным AI-ассистентом.',
      button: 'Открыть Будущее',
    },
    problemSlide: {
      title: 'Вы тонете в рутинной работе?',
      subtitle: 'В сегодняшней конкурентной среде ручные задачи и информационная перегрузка являются главными препятствиями для роста.',
      problems: [
        { title: '45% ежедневных задач', text: 'Могут быть автоматизированы, но в большинстве компаний остаются ручными, что ведет к потере времени.' },
        { title: 'Информационная перегрузка', text: 'Важные данные теряются в письмах и документах, замедляя принятие решений.' },
        { title: 'Ожидания клиентов', text: 'Современные клиенты требуют мгновенной поддержки 24/7, которую сложно масштабировать вручную.' },
      ],
    },
    features: {
        title: 'Что наш AI может сделать для вас',
        subtitle: 'Единая платформа для автоматизации, анализа и ускорения каждого аспекта вашего бизнеса.',
        items: [
            { key: 'CustomerSupportIcon', title: 'Автоматизированная поддержка', description: 'Мгновенно отвечайте на запросы клиентов 24/7 с помощью умного диалогового AI.' },
            { key: 'DataAnalysisIcon', title: 'Анализ данных и инсайты', description: 'Превратите сложные данные в понятные, действенные идеи для принятия более умных решений.' },
            { key: 'ContentCreationIcon', title: 'Ускоренное создание контента', description: 'Создавайте качественные маркетинговые тексты, письма и отчеты за долю времени.' },
            { key: 'AutomationIcon', title: 'Автоматизация рабочих процессов', description: 'Автоматизируйте повторяющиеся задачи, от планирования встреч до ввода данных.' },
        ]
    },
    dataSlide: {
        title: 'Получите полезные инсайты',
        subtitle: 'Перестаньте гадать. Наш AI анализирует ваши данные, чтобы показать, где можно сэкономить время и ресурсы.',
        chartData: [
            { name: 'Ручные задачи', timeSpent: 45, aiAssisted: 10 },
            { name: 'Ввод данных', timeSpent: 35, aiAssisted: 5 },
            { name: 'Отчетность', timeSpent: 25, aiAssisted: 8 },
            { name: 'Поддержка', timeSpent: 50, aiAssisted: 15 },
            { name: 'Планирование', timeSpent: 15, aiAssisted: 2 },
        ],
        legend: { timeSpent: 'Затраченное время (часы/неделя)', aiAssisted: 'С помощью AI' }
    },
    benefitsSlide: {
        title: 'Ощутите реальные бизнес-преимущества',
        subtitle: 'Внедрение нашего AI — это не просто технологическое обновление, а инвестиция в будущее вашей компании.',
        items: [
            { key: 'ZapIcon', title: 'Повышение производительности', description: 'Автоматизируйте рабочие процессы и освободите команду для стратегических задач.' },
            { key: 'DataAnalysisIcon', title: 'Снижение операционных расходов', description: 'Сократите расходы за счет автоматизации поддержки, ввода данных и других задач.' },
            { key: 'CustomerSupportIcon', title: 'Повышение лояльности клиентов', description: 'Обеспечьте мгновенную и точную поддержку 24/7, чтобы радовать клиентов.' },
            { key: 'BriefcaseIcon', title: 'Более быстрые и умные решения', description: 'Используйте инсайты на основе AI для принятия решений на основе данных.' },
        ]
    },
    useCasesSlide: {
        title: 'AI-ассистент для каждого отдела',
        subtitle: 'Наша платформа универсальна и предоставляет специализированную помощь по всей вашей организации.',
        items: [
            { key: 'TargetIcon', title: 'Маркетинг', description: 'Персонализированные кампании, SEO-контент и управление соцсетями.' },
            { key: 'BriefcaseIcon', title: 'Продажи', description: 'Квалификация лидов, автоматические фоллоу-апы и ввод данных в CRM.' },
            { key: 'ZapIcon', title: 'Операции', description: 'Управление запасами, оптимизация логистики и генерация отчетов.' },
            { key: 'UsersIcon', title: 'HR', description: 'Отбор резюме, помощь в адаптации новых сотрудников и ответы на вопросы.' },
        ]
    },
    foundersSlide: {
        title: 'Знакомьтесь с визионерами',
        subtitle: 'Умы, стоящие за нашей прорывной технологией AI.',
        founders: [
            { name: 'Андрей Бочек', title: 'CTO, Основатель', imageUrl: 'https://i.pravatar.cc/150?u=andrew' },
            { name: 'Сергей Климов', title: 'CCO, Сооснователь', imageUrl: 'https://i.pravatar.cc/150?u=sergey' },
        ]
    },
    integrationSlide: {
        title: 'Бесшовная интеграция с вашими инструментами',
        subtitle: 'Наш AI-ассистент подключается к программам, которые вы уже используете, улучшая ваши рабочие процессы без сбоев.',
    },
    testimonialSlide: {
        quote: 'Внедрение этого AI-ассистента изменило правила игры. Мы сократили время ответа на 90% и освободили нашу команду для инноваций. Это лучшая инвестиция, которую мы сделали в этом году.',
        author: 'Анна Иванова, CEO TechCorp',
        company: 'Инноваторы в SaaS',
    },
    ctaSlide: {
        title: 'Готовы трансформировать свой бизнес?',
        subtitle: 'Давайте обсудим, как наш AI-ассистент может быть адаптирован под ваши нужды. Запланируйте бесплатное демо.',
        button: 'Запланировать бесплатное демо',
        contact: 'Или свяжитесь с нами по',
        contactLink: 'sales@aibusines.co',
    },
  },
  thai: {
    header: {
      title: 'โซลูชัน AI สำหรับธุรกิจ',
      slide: 'สไลด์',
      of: 'จาก',
    },
    titleSlide: {
      title: 'ปฏิวัติขั้นตอนการทำงานของคุณด้วย AI',
      subtitle: 'ปลดล็อกประสิทธิภาพที่เหนือชั้น เพิ่มผลิตภาพ และขับเคลื่อนการเติบโตให้กับธุรกิจของคุณด้วยผู้ช่วย AI อัจฉริยะของเรา',
      button: 'ค้นพบอนาคต',
    },
    problemSlide: {
      title: 'คุณกำลังจมอยู่กับงานที่น่าเบื่อหรือไม่?',
      subtitle: 'ในโลกที่มีการแข่งขันสูง งานที่ต้องทำด้วยตนเองและข้อมูลที่ล้นหลามคืออุปสรรคที่ใหญ่ที่สุดต่อการเติบโต',
      problems: [
        { title: '45% ของงานประจำวัน', text: 'สามารถทำงานอัตโนมัติได้ แต่ส่วนใหญ่ยังคงทำด้วยตนเอง ทำให้เสียเวลาไปโดยเปล่าประโยชน์' },
        { title: 'ข้อมูลที่ล้นหลาม', text: 'ข้อมูลสำคัญสูญหายไปในอีเมลและเอกสาร ทำให้การตัดสินใจช้าและไม่มีประสิทธิภาพ' },
        { title: 'ความคาดหวังของลูกค้า', text: 'ลูกค้าสมัยใหม่ต้องการการสนับสนุนทันทีตลอด 24 ชั่วโมง ซึ่งยากต่อการขยายขนาดด้วยตนเอง' },
      ],
    },
    features: {
        title: 'AI ของเราทำอะไรให้คุณได้บ้าง',
        subtitle: 'แพลตฟอร์มที่รวมทุกอย่างเพื่อทำให้เป็นอัตโนมัติ วิเคราะห์ และเร่งความเร็วในทุกแง่มุมของธุรกิจคุณ',
        items: [
            { key: 'CustomerSupportIcon', title: 'การสนับสนุนลูกค้าอัตโนมัติ', description: 'แก้ไขข้อสงสัยของลูกค้าได้ทันทีตลอด 24 ชั่วโมงด้วย AI สนทนาอัจฉริยะ' },
            { key: 'DataAnalysisIcon', title: 'การวิเคราะห์ข้อมูลและข้อมูลเชิงลึก', description: 'เปลี่ยนข้อมูลที่ซับซ้อนให้เป็นข้อมูลเชิงลึกที่ชัดเจนและนำไปปฏิบัติได้เพื่อการตัดสินใจทางธุรกิจที่ชาญฉลาดขึ้น' },
            { key: 'ContentCreationIcon', title: 'การสร้างเนื้อหาที่รวดเร็วขึ้น', description: 'สร้างข้อความทางการตลาด อีเมล และรายงานคุณภาพสูงโดยใช้เวลาเพียงเล็กน้อย' },
            { key: 'AutomationIcon', title: 'ระบบอัตโนมัติของเวิร์กโฟลว์', description: 'ทำงานซ้ำๆ โดยอัตโนมัติ ตั้งแต่การนัดหมายไปจนถึงการป้อนข้อมูล ช่วยให้ทีมของคุณมีเวลาว่างมากขึ้น' },
        ]
    },
    dataSlide: {
        title: 'ปลดล็อกข้อมูลเชิงลึกที่นำไปปฏิบัติได้',
        subtitle: 'หยุดคาดเดา AI ของเราจะวิเคราะห์ข้อมูลของคุณเพื่อแสดงให้เห็นว่าคุณสามารถประหยัดเวลาและทรัพยากรได้ที่ไหน',
        chartData: [
            { name: 'งานทั่วไป', timeSpent: 45, aiAssisted: 10 },
            { name: 'การป้อนข้อมูล', timeSpent: 35, aiAssisted: 5 },
            { name: 'การรายงาน', timeSpent: 25, aiAssisted: 8 },
            { name: 'การสนับสนุน', timeSpent: 50, aiAssisted: 15 },
            { name: 'การจัดตาราง', timeSpent: 15, aiAssisted: 2 },
        ],
        legend: { timeSpent: 'เวลาที่ใช้ (ชม./สัปดาห์)', aiAssisted: 'AI ช่วย' }
    },
    benefitsSlide: {
        title: 'สัมผัสประโยชน์ทางธุรกิจที่จับต้องได้',
        subtitle: 'การนำ AI ของเรามาใช้ไม่ใช่แค่การอัปเกรดเทคโนโลยี แต่เป็นการลงทุนเพื่อความสำเร็จในอนาคตของบริษัทคุณ',
        items: [
            { key: 'ZapIcon', title: 'เพิ่มผลิตภาพ', description: 'ทำให้เวิร์กโฟลว์เป็นอัตโนมัติและเพิ่มเวลาให้ทีมของคุณมุ่งเน้นไปที่งานเชิงกลยุทธ์ที่มีมูลค่าสูง' },
            { key: 'DataAnalysisIcon', title: 'ลดต้นทุนการดำเนินงาน', description: 'ลดค่าใช้จ่ายโดยการทำให้การสนับสนุน การป้อนข้อมูล และงานที่ต้องใช้ทรัพยากรมากเป็นอัตโนมัติ' },
            { key: 'CustomerSupportIcon', title: 'เพิ่มความพึงพอใจของลูกค้า', description: 'ให้การสนับสนุนที่รวดเร็ว แม่นยำ และตลอด 24 ชั่วโมงเพื่อสร้างความพึงพอใจและความภักดีของลูกค้า' },
            { key: 'BriefcaseIcon', title: 'การตัดสินใจที่รวดเร็วและชาญฉลาดยิ่งขึ้น', description: 'ใช้ประโยชน์จากข้อมูลเชิงลึกที่ขับเคลื่อนด้วย AI เพื่อทำการตัดสินใจที่ขับเคลื่อนด้วยข้อมูลอย่างมั่นใจ' },
        ]
    },
    useCasesSlide: {
        title: 'ผู้ช่วย AI สำหรับทุกแผนก',
        subtitle: 'แพลตฟอร์มของเรามีความหลากหลาย ให้ความช่วยเหลือเฉพาะทางทั่วทั้งองค์กรของคุณ',
        items: [
            { key: 'TargetIcon', title: 'การตลาด', description: 'แคมเปญส่วนบุคคล เนื้อหา SEO และการจัดการโซเชียลมีเดีย' },
            { key: 'BriefcaseIcon', title: 'การขาย', description: 'การคัดกรองลูกค้าเป้าหมาย การติดตามผลอัตโนมัติ และการป้อนข้อมูล CRM' },
            { key: 'ZapIcon', title: 'ปฏิบัติการ', description: 'การจัดการสินค้าคงคลัง การเพิ่มประสิทธิภาพโลจิสติกส์ และการสร้างรายงาน' },
            { key: 'UsersIcon', title: 'ทรัพยากรบุคคล', description: 'การคัดกรองประวัติย่อ การช่วยเหลือในการเริ่มงาน และคำถามเกี่ยวกับนโยบาย' },
        ]
    },
    foundersSlide: {
        title: 'พบกับผู้มีวิสัยทัศน์',
        subtitle: 'ผู้สร้างสรรค์ที่อยู่เบื้องหลังเทคโนโลยี AI ที่ก้าวล้ำของเรา',
        founders: [
            { name: 'แอนดรูว์ โบเช็ค', title: 'CTO, ผู้ก่อตั้ง', imageUrl: 'https://i.pravatar.cc/150?u=andrew' },
            { name: 'เซอร์เกย์ คลิมอฟ', title: 'CCO, ผู้ร่วมก่อตั้ง', imageUrl: 'https://i.pravatar.cc/150?u=sergey' },
        ]
    },
    integrationSlide: {
        title: 'การผสานรวมกับเครื่องมือของคุณอย่างราบรื่น',
        subtitle: 'ผู้ช่วย AI ของเราเชื่อมต่อกับซอฟต์แวร์ที่คุณใช้อยู่แล้ว เพิ่มประสิทธิภาพเวิร์กโฟลว์ที่มีอยู่ของคุณโดยไม่หยุดชะงัก',
    },
    testimonialSlide: {
        quote: 'การนำผู้ช่วย AI นี้มาใช้เป็นการเปลี่ยนแปลงครั้งใหญ่ เราลดเวลาตอบสนองลง 90% และทำให้ทีมของเรามีเวลาไปมุ่งเน้นที่นวัตกรรม เป็นการลงทุนที่ดีที่สุดที่เราทำในปีนี้',
        author: 'เจน โด, CEO ของ TechCorp',
        company: 'ผู้นำนวัตกรรมใน SaaS',
    },
    ctaSlide: {
        title: 'พร้อมที่จะเปลี่ยนแปลงธุรกิจของคุณแล้วหรือยัง?',
        subtitle: 'มาพูดคุยกันว่าผู้ช่วย AI ของเราจะสามารถปรับให้เข้ากับความต้องการเฉพาะของคุณได้อย่างไร นัดหมายการสาธิตฟรีกับผู้เชี่ยวชาญของเราวันนี้',
        button: 'นัดหมายการสาธิตฟรี',
        contact: 'หรือติดต่อเราได้ที่',
        contactLink: 'sales@aibusines.co',
    },
  },
};
