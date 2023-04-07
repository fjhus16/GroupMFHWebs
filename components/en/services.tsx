import { useState } from 'react';

const Services = () => {
    const [selectedButton, setSelectedButton] = useState(0);

    const handleClick = (index: number) => {
        setSelectedButton(index);
    };

    const services = [
        {
            title: 'Tax Auditing',
            text: <>MFH Group audits and certifies the balance sheets, income statements, and tax declarations of individuals and legal entities<br />
                (companies, associations, foundations, and their enterprises), as well as their requests related to tax laws, in terms of compliance with<br />
                tax laws and generally accepted accounting standards.The prepared audit reports are submitted for the use of clients and official authorities.<br />
                Tables that have been certified by Sworn-in Financial Advisors and given to official authorities in accordance with the law are considered as<br />
                a document that has been examined to the extent of certification by the state's audit officials.</>
        },
        {
            title: 'Accounting and Financial Consultancy Services',
            text: <>MFH Group provides the following services that clients may require during<br />
                financial, administrative and legal events they face with a solution-oriented perspective:<br />
                <br />
                ✓ Financial Consulting<br />
                ✓ Tax Planning<br />
                ✓ Tax Legislation and Practices Consultancy<br />
                ✓ Tax Disputes (Tax Litigation)<br />
                ✓ Tax Compromises<br />
                ✓ Cost Accounting Consultancy<br />
                ✓ International Tax Consulting<br />
                ✓ Bilateral Tax Treaty Implementation<br />
                ✓ Foreign Capital Legislation, Practices and Foreign Capital Investments and Financial Advisory<br />
                ✓ Tax Practices of Foreign Individuals/Companies<br />
                ✓ Establishment Procedures (Establishment of Domestic and Foreign Capital Companies, Branches, Liaison Offices and Representative Offices)<br />
                ✓ Mergers and Acquisitions, Valuation, Company Liquidation<br />
                ✓ Articles of Association Amendments, General Assembly Meetings<br />
                ✓ Capital Market Practices (Public Offering Studies)<br />
                ✓ Up-to-date Information Transmissions on Changes in Financial Legislation<br /></>
        },
        {
            title: 'Incentives and R&D Consultancy',
            text: <>MFH Group offers the following services with a solutions-oriented perspective<br />
                which clients may require for the resolution of technical and complex issues such as<br />
                Taxes, Incentives, Exemptions and disputes arising from legislation related to these issues:<br />
                <br />
                ✓ Consultancy on Investment Incentive Legislation (Investment Discount Exemption, VAT Exemption, Tax-Duty Fee Exemption, etc.)<br />
                ✓ Consultancy on the Implementation of the Foreign Direct Investment Law<br />
                ✓ Consultancy on R&D Incentive Legislation<br />
                ✓ Consultancy on Technopark Legislation<br />
                ✓ Consultancy on Free Zone Legislation<br />
                ✓ Consultancy on Trademark Incentive Legislation<br />
                ✓ Consultancy on Fair, Exhibition and Fair Incentive Legislation<br />
                ✓ Analysis of Tax Liabilities in Transactions Defined as "Invisible Transactions"<br />
                ✓ Obligations and Practices Related to the Resource Utilization Support Fund<br />
                ✓ Other Tax Incentives<br /></>
        },
        {
            title: 'Social Security Advisory',
            text: <>MFH Group provides solutions to companies in the fields of labor and social security such as<br />
                Social Security Institution procedures, termination processes, reinstatements and calculations,<br />
                severances, notice and vacation pay, transfers and mergers, employment contracts and compliance with all legal obligations.</>
        },
        {
            title: 'Customs and Foreign Trade Legislation Consultancy',
            text: <>MFH Group offers the following services that its customers may need within the scope of<br />
                Export, Import and Foreign Exchange Legislation and applications with a solution-oriented perspective:<br />
                <br />
                ✓ Customs legislation<br />
                ✓ Foreign trade legislation<br />
                ✓ Tax legislation related to foreign trade (GMSI, SMK, withholding tax, VAT, stamp tax)<br />
                ✓ Consultancy on the Legislation on the Protection of the Value of Turkish Currency<br />
                ✓ VAT-Tax legislation and refund transactions<br />
                ✓ Export transactions<br />
                ✓ Inward processing regime<br />
                ✓ Customs reconciliation (counseling in the reconciliation process)<br />
                ✓ Customs litigation<br />
                ✓ Audit process (consultancy in the process of inspector review)<br /></>
        },
        {
            title: 'Management, Corporate Finance and Technology Consulting',
            text: <>MFH Group's technical knowledge and experience, flexibility and close working relationship<br />
                with our clients enables us to be a team capable of developing a different approach for each different case.<br />
                We enrich and differentiate our sector and subject matter expertise, which is the result of our technical knowledge and experience,<br />
                by working with companies of varying scales and structures. Our goal in every project<br />
                is to implement feasible and result-oriented approaches that will add value to our customers with our flexible working structure.<br />
                Our consultancy team is equipped with the most up-to-date theoretical knowledge, as well as practical experience<br />
                and the latest technological developments in order to realize your projects.<br />
                MFH Group is organized to provide management consultancy support by acting as a whole in line with customer needs.</>
        },
        {
            title: 'Company Law Legislation Consultancy',
            text: <>Pursuant to the Turkish Commercial Code No. 6102 and the secondary legislation issued in relation to this Code,<br />
            necessary services are provided for the change of type of commercial enterprises and companies,<br />
            mergers or divisions of companies in accordance with the tax legislation.</>
        },
    ];

    return (
        <div className="flex-col justify-center items-center hidden lg:flex">
            <div className="flex flex-wrap justify-center items-center">{services.map((service, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`py-2 px-4 font-bold my-2 mx-1 hover:bg-black hover:text-white transition-colors duration-500 ${selectedButton === index ? 'bg-black text-white' : 'text-black'}`}
                    style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)', transitionProperty: 'box-shadow, transform', transitionDuration: '0.5s', transformOrigin: 'center' }}
                >
                    {service.title}
                </button>
            ))}</div>
            {selectedButton !== -1 && (
                <div
                    className="bg-gray-100 p-4 my-2 w-full md:w-3/4 lg:w-2/3"
                    style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)' }}
                >
                    <h2 className="text-lg font-bold text-gray-800">{services[selectedButton].title}</h2>
                    <p>{services[selectedButton].text}</p>
                </div>
            )}
        </div>
    );
};

export default Services;
