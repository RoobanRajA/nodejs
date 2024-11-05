/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Courier, Quote, Shipment } from "@prisma/client";

export class CourierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CourierCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierCountArgs>
  ): Promise<number> {
    return this.prisma.courier.count(args);
  }

  async findMany<T extends Prisma.CourierFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierFindManyArgs>
  ): Promise<Courier[]> {
    return this.prisma.courier.findMany(args);
  }
  async findOne<T extends Prisma.CourierFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierFindUniqueArgs>
  ): Promise<Courier | null> {
    return this.prisma.courier.findUnique(args);
  }
  async create<T extends Prisma.CourierCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierCreateArgs>
  ): Promise<Courier> {
    return this.prisma.courier.create<T>(args);
  }
  async update<T extends Prisma.CourierUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierUpdateArgs>
  ): Promise<Courier> {
    return this.prisma.courier.update<T>(args);
  }
  async delete<T extends Prisma.CourierDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierDeleteArgs>
  ): Promise<Courier> {
    return this.prisma.courier.delete(args);
  }

  async findQuotes(
    parentId: string,
    args: Prisma.QuoteFindManyArgs
  ): Promise<Quote[]> {
    return this.prisma.courier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .quotes(args);
  }

  async findShipments(
    parentId: string,
    args: Prisma.ShipmentFindManyArgs
  ): Promise<Shipment[]> {
    return this.prisma.courier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .shipments(args);
  }
}