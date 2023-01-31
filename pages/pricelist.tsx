import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';

interface Props {}

const Pricelist: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col p-8 gap-8 items-center bg-black/50 rounded-3xl">
                <div className="text-center text-xl lg:text-2xl">
                    <p>Hiện tại mình đang nhận chụp theo các gói sau đây</p>
                    <p>
                        Nhưng nếu bạn có nhu cầu riêng thì cũng đừng ngần ngại{' '}
                        <Link
                            href="/contact"
                            className="text-yellow-500 cursor-pointer hover:underline hover:underline-offset-8"
                        >
                            liên hệ
                        </Link>{' '}
                        mình nhé!
                    </p>
                </div>
                <div className="w-full flex-col lg:flex-row flex gap-8 justify-evenly">
                    <div className="p-4 border-solid border-2 rounded-3xl border-yellow-500">
                        <p className="font-bold">Cá nhân</p>
                        <p className="text-xl lg:text-2xl my-2 text-yellow-500 font-bold tracking-wider">
                            700k
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Một buổi chụp hình 2 tiếng</li>
                            <li>Chỉnh sửa 20 hình ảnh theo lựa chọn</li>
                        </ul>
                    </div>
                    <div className="p-4 border-solid border-2 rounded-3xl border-yellow-500">
                        <p className="font-bold">Cặp đôi</p>
                        <p className="text-xl lg:text-2xl my-2 text-yellow-500 font-bold tracking-wider">
                            1,000k
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Một buổi chụp hình 3 tiếng</li>
                            <li>Chỉnh sửa 20 hình ảnh theo lựa chọn</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full">
                    <ul className="list-disc list-inside">
                        <li>
                            Bạn có thể xem qua những bộ ảnh mình đã thực hiện để có thêm ý tưởng
                            nhé.
                        </li>
                        <li>
                            Sau khi bạn đã có ý tưởng rồi thì tụi mình sẽ bắt đầu chọn địa điểm và
                            sắp xếp thời gian theo ý bạn nhé.
                        </li>
                        <li>Mình chuyên chụp ở những nơi đơn giản như quán cafe hay công viên.</li>
                        <li>
                            Nếu bạn có ý muốn chụp ở studio thì phần chi phí bên studio bạn sẽ tự lo
                            liệu nhé.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pricelist;
